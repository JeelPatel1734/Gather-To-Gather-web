
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/core'; // Import the hook
import PayPal from 'react-native-paypal-lib'; // Import PayPal library

export default function PaymentScreen() {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to fetch cart items
  const fetchCartItems = () => {
    fetch('http://localhost:8093/getCart')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "cart fetched successfully") {
          setCartItems(data.products);
        } else {
          Alert.alert('Error', 'Failed to fetch cart items.');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch cart items.');
      });
  };

  // Fetch cart items whenever the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchCartItems(); // Fetch cart items when screen is focused
    }, [])
  );

  // Calculate totals
  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const gst = itemsTotal * 0.13; // 13% GST
    const discount = 0; // Example static discount
    const total = itemsTotal + gst - discount;

    return {
      itemsTotal,
      gst,
      discount,
      total,
    };
  };

  // Destructure totals from calculateTotal function
  const { itemsTotal, gst, discount, total } = calculateTotal();

  // PayPal payment method
  const handlePayPalPayment = () => {
    PayPal.initialize(PayPal.NO_NETWORK, 'AWNxSpYdFLNERKUYfQ5eXYgRZXgOPAM0NsxavZVWrwAry9wiEoIINsU_CRpN8B3GJA7HBEzqTQM9RZsg'); 
    PayPal.pay({
      price: total.toFixed(2), // Total price
      currency: 'USD', // Use your currency code
      description: 'Payment for cart items', // Order description
    })
      .then((response) => {
        // Handle success
        Alert.alert('Payment Successful', `Amount Charged: $${total.toFixed(2)}`);
         fetch('http://localhost:8093/clearCart', {
              method: 'DELETE',
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.message === "Cart cleared successfully") {
                  setCartItems([]);
                  Alert.alert('Cart Cleared', 'Your cart has been cleared successfully!');
                } else {
                  Alert.alert('Error', 'Failed to clear the cart.');
                }
              })
              .catch((error) => {
                console.error(error);
                Alert.alert('Error', 'Failed to clear the cart.');
              });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        Alert.alert('Payment Failed', 'Something went wrong with the PayPal payment.');
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>

      {/* Order Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity || 1}</Text>
              <Text style={styles.itemPrice}>
                Price: ${(item.price * (item.quantity || 1)).toFixed(2)}
              </Text>
              {item.customization && (
                <Text style={styles.itemCustomization}>
                  Customization: {item.customization}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>

      {/* Charges Breakdown */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Charges Breakdown</Text>

        {/* Per-Item Breakdown */}
        {cartItems.map((item, index) => (
          <View key={index} style={styles.chargeRow}>
            <Text style={styles.chargeLabel}>
              {item.name} (x{item.quantity})
            </Text>
            <Text style={styles.chargeValue}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}

        <View style={styles.divider} />

        {/* Items Total */}
        <View style={styles.chargeRow}>
          <Text style={styles.chargeLabel}>Items Total:</Text>
          <Text style={styles.chargeValue}>${itemsTotal.toFixed(2)}</Text>
        </View>

        {/* GST */}
        <View style={styles.chargeRow}>
          <Text style={styles.chargeLabel}>GST (13%):</Text>
          <Text style={styles.chargeValue}>${gst.toFixed(2)}</Text>
        </View>

        

        {/* Discount (if applied) */}
        {discount > 0 && (
          <View style={styles.chargeRow}>
            <Text style={styles.chargeLabel}>Discount:</Text>
            <Text style={[styles.chargeValue, styles.discountValue]}>
              -${discount.toFixed(2)}
            </Text>
          </View>
        )}

        {/* Total Amount */}
        <View style={styles.chargeRow}>
          <Text style={[styles.chargeLabel, styles.totalLabel]}>Total:</Text>
          <Text style={[styles.chargeValue, styles.totalValue]}>
            ${total.toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Payment Options */}
      <View style={styles.buttons}>
        <Text style={styles.paymentTitle}>Choose a Payment Method:</Text>
        
        {/* PayPal Payment Button */}
        <Button
          title="Pay with PayPal"
          onPress={handlePayPalPayment}
          color="#009CDE"
        />
        
        <View style={{ height: 10 }} />
                <View style={{ height: 10 }} />
       {/* <Button
          title="Pay with Credit Card"
          onPress={() =>
            alert(
              `Payment Successful! Amount Charged: $${total.toFixed(
                2
              )} (Credit Card)`
            )
          }
          color="#6200ee"
        /> */}
        <View style={{ height: 10 }} />
        {/* <Button
          title="Pay with Debit Card"
          onPress={() =>
            alert(
              `Payment Successful! Amount Charged: $${total.toFixed(
                2
              )} (Debit Card)`
            )
          }
          color="#6200ee"
        /> */}
        
        <View style={{ height: 30 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  itemCustomization: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
  },
  chargeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  chargeLabel: {
    fontSize: 16,
    color: '#555',
  },
  chargeValue: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    marginVertical: 10,
    height: 1,
    backgroundColor: '#ccc',
  },
  discountValue: {
    color: 'red',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalValue: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#6200ee',
  },
  buttons: {
    marginTop: 20,
    padding: 10,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200ee',
    textAlign: 'center',
  },
});
