import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';
import PayPal from 'react-native-paypal-lib';
import { useNavigation } from '@react-navigation/native';

export default function PaymentScreen() {
   const navigation = useNavigation();
    
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');

  // Fetch email from AsyncStorage
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (storedEmail) {
          setEmail(storedEmail);
          fetchCartItems(storedEmail);
        }
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };
    fetchEmail();
  }, []);

  // Fetch cart items based on email
  const fetchCartItems = async (userEmail) => {
    try {
      const response = await fetch(`http://localhost:8093/getCart?email=${userEmail}`);
      const data = await response.json();
      if (data.message === 'Cart fetched successfully') {
        setCartItems(data.products);
      } else {
        Alert.alert('Error', 'Failed to fetch cart items.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch cart items.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (email) {
        fetchCartItems(email);
      }
    }, [email])
  );

  // Calculate totals
  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const gst = itemsTotal * 0.13;
    const deliveryFee = 5;
    const discount = 0;
    const total = itemsTotal + gst + deliveryFee - discount;

    return { itemsTotal, gst, deliveryFee, discount, total };
  };

  const { itemsTotal, gst, deliveryFee, discount, total } = calculateTotal();

  // PayPal payment method
const handlePayment = async () => {
  // Prepare booking data
  const bookingData = {
    email,
    items: cartItems,
    total: itemsTotal,
    gst,
    deliveryFee,
    discount,
    finalTotal: total,
    paymentMethod: 'Online Payment',
    status: 'Paid',
  };

  // Send booking data to the backend
  try {
    const bookingResponse = await fetch('http://localhost:8093/addBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const bookingResult = await bookingResponse.json();

    if (bookingResponse.ok) {
      Alert.alert('Payment Successful', 'Your order has been placed successfully!');

      // Clear cart after successful booking
      await fetch(`http://localhost:8093/clearCart?email=${email}`, { method: 'DELETE' });

      // Navigate to home screen
      navigation.replace('Main');
    } else {
      Alert.alert('Error', bookingResult.message || 'Failed to process payment.');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Something went wrong while processing the payment.');
  }
};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payment Details</Text>
      </View>

      {/* Order Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛒 Order Summary</Text>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity || 1}</Text>
              <Text style={styles.itemPrice}>
                Price: ${(item.price * (item.quantity || 1)).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Charges Breakdown */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💰 Charges Breakdown</Text>

        <View style={styles.chargeRow}>
          <Text style={styles.chargeLabel}>Items Total:</Text>
          <Text style={styles.chargeValue}>${itemsTotal.toFixed(2)}</Text>
        </View>

        <View style={styles.chargeRow}>
          <Text style={styles.chargeLabel}>GST (13%):</Text>
          <Text style={styles.chargeValue}>${gst.toFixed(2)}</Text>
        </View>

        <View style={styles.chargeRow}>
          <Text style={styles.chargeLabel}>Delivery Fee:</Text>
          <Text style={styles.chargeValue}>${deliveryFee.toFixed(2)}</Text>
        </View>

        {discount > 0 && (
          <View style={styles.chargeRow}>
            <Text style={styles.chargeLabel}>Discount:</Text>
            <Text style={[styles.chargeValue, styles.discountValue]}>
              -${discount.toFixed(2)}
            </Text>
          </View>
        )}

        <View style={styles.chargeRow}>
          <Text style={[styles.chargeLabel, styles.totalLabel]}>Total:</Text>
          <Text style={[styles.chargeValue, styles.totalValue]}>${total.toFixed(2)}</Text>
        </View>
      </View>

      {/* Payment Options */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>💳 Choose a Payment Method:</Text>

        <TouchableOpacity style={styles.paypalButton} onPress={handlePayment}>
          <Text style={styles.paypalButtonText}>Pay with PayPal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    backgroundColor: '#ff6347',
    padding: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  chargeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  paymentSection: {
    padding: 20,
    alignItems: 'center',
  },
  paypalButton: {
    backgroundColor: '#009CDE',
    padding: 12,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  paypalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
