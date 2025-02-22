import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../context/CartProvider';

export default function CheckoutScreen({ navigation }) {
  const { cartItems, clearCart } = useCart();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
  const gst = totalAmount * 0.06; // 6% GST
  const grandTotal = totalAmount + gst;

  const paymentMethods = [
    { id: '1', name: 'Credit Card' },
    { id: '2', name: 'Debit Card' },
    { id: '3', name: 'UPI' },
    { id: '4', name: 'Cash on Delivery' },
  ];

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      Alert.alert('Error', 'Please select a payment method!');
      return;
    }

    Alert.alert(
      'Payment Successful',
      `You have paid $${grandTotal.toFixed(2)} using ${selectedPaymentMethod}.`
    );
    clearCart(); // Clear cart after payment
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Order Summary */}
      <View style={styles.summary}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>

      {/* Payment Details */}
      <View style={styles.paymentDetails}>
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <Text style={styles.detail}>Subtotal: ${totalAmount.toFixed(2)}</Text>
        <Text style={styles.detail}>GST (6%): ${gst.toFixed(2)}</Text>
        <Text style={styles.detail}>Grand Total: ${grandTotal.toFixed(2)}</Text>
      </View>

      {/* Payment Method */}
      <View style={styles.paymentMethods}>
        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentOption,
              selectedPaymentMethod === method.name && styles.selectedPaymentOption,
            ]}
            onPress={() => setSelectedPaymentMethod(method.name)}
          >
            <Text style={styles.paymentText}>{method.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  summary: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200ee',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    color: '#6200ee',
  },
  paymentDetails: {
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  paymentMethods: {
    marginBottom: 20,
  },
  paymentOption: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  selectedPaymentOption: {
    borderColor: '#6200ee',
    backgroundColor: '#e8f0fe',
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  payButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#6200ee',
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
