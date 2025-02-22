import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false); // Toggle between View and Edit mode
  const [profile, setProfile] = useState({
    name: 'Jeel Patel',
    photo: require('./jeel.jpg'), // Local image file
    birthdate: 'March 17, 2004',
    address: '123 Maple Street, Toronto, ON',
    email: 'jeelppatel1734@gmail.com',
    phone: '+1 (437) 232-4752',
    savedCards: [
      { id: '1', type: 'Visa', number: '**** **** **** 4321', expiry: '12/25' },
      { id: '2', type: 'MasterCard', number: '**** **** **** 5657', expiry: '03/26' },
    ],
  });

  // State for Catering Details
  const [cateringDetails, setCateringDetails] = useState(null);

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Profile Updated', 'Your profile details have been updated successfully.');
  };

  const handleConfirmBooking = () => {
    // Dummy booking details for demonstration
    const bookingDetails = {
      date: '2025-03-17',
      time: '6:00 PM',
      location: '1 Fountainhead',
      eventType: 'Birthday Party',
      guests: 50,
      additionalDetails: 'less spicy food',
      hey:'Booking Confirmed! Your catering booking is confirmed. Payment call will be forwarded within 1 business day.'

    };

    setCateringDetails(bookingDetails);
    Alert.alert(
      'Booking Confirmed!',
      `Your catering booking is confirmed. Payment call will be forwarded within 1 business day.`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={profile.photo} style={styles.photo} />
        {isEditing ? (
          <TextInput
            style={[styles.name, styles.input]}
            value={profile.name}
            onChangeText={(text) => setProfile({ ...profile, name: text })}
            placeholder="Enter your name"
          />
        ) : (
          <Text style={styles.name}>{profile.name}</Text>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>📧 Email</Text>
        {isEditing ? (
          <TextInput
            style={[styles.input]}
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        ) : (
          <Text style={styles.text}>{profile.email}</Text>
        )}

        <Text style={styles.sectionTitle}>📞 Contact Number</Text>
        {isEditing ? (
          <TextInput
            style={[styles.input]}
            value={profile.phone}
            onChangeText={(text) => setProfile({ ...profile, phone: text })}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        ) : (
          <Text style={styles.text}>{profile.phone}</Text>
        )}

        <Text style={styles.sectionTitle}>🎂 Birth Date</Text>
        {isEditing ? (
          <TextInput
            style={[styles.input]}
            value={profile.birthdate}
            onChangeText={(text) => setProfile({ ...profile, birthdate: text })}
            placeholder="Enter your birthdate"
          />
        ) : (
          <Text style={styles.text}>{profile.birthdate}</Text>
        )}

        <Text style={styles.sectionTitle}>📍 Address</Text>
        {isEditing ? (
          <TextInput
            style={[styles.input]}
            value={profile.address}
            onChangeText={(text) => setProfile({ ...profile, address: text })}
            placeholder="Enter your address"
          />
        ) : (
          <Text style={styles.text}>{profile.address}</Text>
        )}

        <Text style={styles.sectionTitle}>💳 Saved Cards</Text>
        {profile.savedCards.map((card) => (
          <View key={card.id} style={styles.card}>
            <Text style={styles.text}>
              {card.type}: {card.number} (Expiry: {card.expiry})
            </Text>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: isEditing ? '#4CAF50' : '#6200ee' }]}
          onPress={isEditing ? handleSave : () => setIsEditing(true)}
        >
          <Text style={styles.buttonText}>{isEditing ? 'Save Changes' : 'Edit Profile'}</Text>
        </TouchableOpacity>
      </View>

      {/* Display Catering Details */}
      {cateringDetails && (
        <View style={styles.cateringSection}>
          <Text style={styles.sectionTitle}>📋 Caterings</Text>
          <Text style={styles.cateringText}>📅 Date: {cateringDetails.date}</Text>
          <Text style={styles.cateringText}>⏰ Time: {cateringDetails.time}</Text>
          <Text style={styles.cateringText}>📍 Location: {cateringDetails.location}</Text>
          <Text style={styles.cateringText}>🎉 Event Type: {cateringDetails.eventType}</Text>
          <Text style={styles.cateringText}>👥 Guests: {cateringDetails.guests}</Text>
          <Text style={styles.cateringText}>
            📜 Additional Details: {cateringDetails.additionalDetails || 'None'}
          </Text>
        </View>
      )}

      {/* Dummy Button to Confirm Booking */}
      <TouchableOpacity
        style={[styles.button, { marginTop: 20, backgroundColor: '#03a9f4' }]}
        onPress={handleConfirmBooking}
      >
        <Text style={styles.buttonText}>Confirm Catering Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
  text: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
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
  cateringSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  cateringText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});
