import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

export default function CateringScreen() {
  const [formData, setFormData] = useState({
    location: '',
    eventType: '',
    guests: '',
    requirements: '',
    date: '',
    time: '',
  });

  const handleConfirmBooking = () => {
    if (!formData.date || !formData.time) {
      Alert.alert('Error', 'Please enter both date and time.');
      return;
    }

    const currentDate = new Date();
    const enteredDate = new Date(formData.date);
    const minDate = new Date(currentDate.setDate(currentDate.getDate() + 2));

    if (enteredDate < minDate) {
      Alert.alert(
        'Invalid Date',
        'Catering is not possible this early. Please choose a date at least 2 days from today.'
      );
      return;
    }

    const orderDetails = `
      Location: ${formData.location || 'N/A'}
      Event Type: ${formData.eventType || 'N/A'}
      Guests: ${formData.guests || 'N/A'}
      Special Requirements: ${formData.requirements || 'N/A'}
      Scheduled Date: ${formData.date || 'N/A'}
      Scheduled Time: ${formData.time || 'N/A'}
    `;
    Alert.alert(
      'Booking Confirmed!',
      `${orderDetails}\n\nPayment call will be forwarded within 1 business day.`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Catering Booking</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Event Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event location"
          value={formData.location}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, location: text }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Event Type:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event type"
          value={formData.eventType}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, eventType: text }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of Guests:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of guests"
          keyboardType="numeric"
          value={formData.guests}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, guests: text }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Special Requirements:</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter any special requirements"
          value={formData.requirements}
          multiline
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, requirements: text }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Date (DD-MM):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date(make sure you book a day ahead)"
          value={formData.date}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, date: text }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Time (HH:MM AM/PM):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter time"
          value={formData.time}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, time: text }))
          }
        />
      </View>
      <Button
        title="Confirm Booking"
        onPress={handleConfirmBooking}
        color="#6200ee"
      />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    height: 40,
  },
});
