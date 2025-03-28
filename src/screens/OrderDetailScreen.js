import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderDetailScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: '',
    birthdate: '',
    address: '',
    email: '',
    phone: '',
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadProfileAndOrders = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (storedEmail) {
          await fetchProfile(storedEmail);
          await fetchOrders(storedEmail);
        } else {
          setProfile((prevProfile) => ({ ...prevProfile, email: '' }));
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    loadProfileAndOrders();
  }, []);

  const fetchProfile = async (email) => {
    try {
      const response = await fetch(`http://192.168.1.5:8093/getProfile?email=${email}`);
      const data = await response.json();
      if (response.ok && data.profile) {
        setProfile({
          name: data.profile.name || '',
          birthdate: data.profile.birthdate || '',
          address: data.profile.address || '',
          email: data.profile.email || email,
          phone: data.profile.phone || '',
        });
      } else {
        setProfile((prevProfile) => ({ ...prevProfile, email }));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch profile.');
      console.error('Fetch Profile Error:', error);
    }
  };

  const fetchOrders = async (email) => {
    try {
      const response = await fetch(`http://192.168.1.5:8093/getBook?email=${email}`);
      const data = await response.json();

      if (response.ok && data.books) {
        const formattedOrders = data.books.map((order) => ({
         
          total: order.total || 'N/A',
          gst: order.gst || 'N/A',
          deliveryFee: order.deliveryFee || 'N/A',
          discount: order.discount || 'N/A',
          finalTotal: order.finalTotal || 'N/A',
          paymentMethod: order.paymentMethod || 'N/A',
          status: order.status || 'Paid', // Default to "Paid" if not provided
          createdAt: order.createdAt || 'N/A',
        }));

        setOrders(formattedOrders);
      } else {
        Alert.alert('Error', 'Failed to fetch orders');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while fetching orders.');
      console.error('Fetch Orders Error:', error);
    } finally {
      setLoading(false);
    }
  };

const updateOrderStatus = async (email, newStatus) => {
    try {
          const storedEmail = await AsyncStorage.getItem('userEmail');
        const response = await fetch(`http://192.168.1.5:8093/updateOrderStatus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:storedEmail, status: newStatus }), // Using email instead of _id
        });

        if (response.ok) {
            console.log("✅ Order status updated successfully");
        } else {
            console.log("❌ Failed to update status");
        }
    } catch (error) {
        console.error("❌ Error updating order status:", error);
    }
};



  const handleLogOut = async () => {
    await AsyncStorage.removeItem('userEmail');
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
      ) : (
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>📧 Email</Text>
          <TextInput style={[styles.input]} value={profile.email} editable={false} />

          <Text style={styles.sectionTitle}>📦 Your Orders</Text>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <View key={index} style={styles.orderItem}>
                <Text style={styles.orderText}>💰 Total: {order.total}</Text>
                <Text style={styles.orderText}>📌 GST: {order.gst}</Text>
                <Text style={styles.orderText}>🚚 Delivery Fee: {order.deliveryFee}</Text>
                <Text style={styles.orderText}>🎟 Discount: {order.discount}</Text>
                <Text style={styles.orderText}>💳 Payment: {order.paymentMethod}</Text>
                <Text style={styles.orderText}>🕒 Created At: {order.createdAt}</Text>

                <View style={styles.statusContainer}>
                  <Text style={styles.orderText}>📌 Status:</Text>
                  <Picker
    selectedValue={order.status}
    style={styles.picker}
    enabled={order.status !== "Cancel"} // Disable if status is "Cancel"
    onValueChange={(itemValue) => updateOrderStatus(order.id, itemValue)}
  >
    <Picker.Item label="Paid" value="Paid" />
    <Picker.Item label="Cancel" value="Cancel" />
  </Picker>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noOrders}>No orders found</Text>
          )}

          <TouchableOpacity style={[styles.button, { backgroundColor: '#6200ee' }]} onPress={handleLogOut}>
            <Text style={styles.buttonText}>{'Log Out'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ee',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  orderItem: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  orderText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  picker: {
    height: 40,
    flex: 1,
  },
  noOrders: {
    textAlign: 'center',
    color: '#888',
    marginTop: 10,
  },
  button: {
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
