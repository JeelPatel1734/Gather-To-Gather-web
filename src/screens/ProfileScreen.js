import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true); // To handle initial loading
  const [profile, setProfile] = useState({
    name: '',
    photo: require('./jeel.jpg'), // Default local image
    birthdate: '',
    address: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail'); // Fetch email from AsyncStorage
        if (storedEmail) {
          await fetchProfile(storedEmail);
        } else {
          setProfile((prevProfile) => ({ ...prevProfile, email: '' })); // Set email to empty if no stored email
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching email:', error);
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const fetchProfile = async (email) => {
    try {
      const response = await fetch(`http://192.168.1.5:8093/getProfile?email=${email}`);
      const data = await response.json();

      if (response.ok && data.profile) {
        setProfile({
          name: data.profile.name || '',
          photo: data.profile.photo || require('./jeel.jpg'), // Use default image if empty
          birthdate: data.profile.birthdate || '',
          address: data.profile.address || '',
          email: data.profile.email || email, // Use fetched email, fallback to stored email
          phone: data.profile.phone || '',
        });
      } else {
        // If profile not found, just keep the email from AsyncStorage
        setProfile((prevProfile) => ({ ...prevProfile, email }));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch profile.');
      console.error('Fetch Profile Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('userEmail'); 
    navigation.navigate('Login');
  };
const handleOrderDetails=async () => {
    navigation.navigate('OrderDetailScreen');
  };
  const handleSave = async () => {
    try {
      const response = await fetch('http://192.168.1.5:8093/addProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      const data = await response.json();
      
      if (response.ok) {
        Alert.alert('Success', data.message);
        setIsEditing(false);
        if (!profile.email) {
          await AsyncStorage.setItem('email', profile.email); // Store email if new profile
        }
      } else {
        Alert.alert('Error', data.message || 'Failed to update profile');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error('Profile Update Error:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
      ) : (
        <>
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
              <Text style={styles.name}>{profile.name || 'Your Name'}</Text>
            )}
          </View>

          <View style={styles.content}>
            <Text style={styles.sectionTitle}>📧 Email</Text>
            <TextInput
              style={[styles.input]}
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              placeholder="Enter your email"
              keyboardType="email-address"
              editable={!profile.email} // Email is editable if empty
            />

            <Text style={styles.sectionTitle}>📞 Contact Number</Text>
            <TextInput
              style={[styles.input]}
              value={profile.phone}
              onChangeText={(text) => setProfile({ ...profile, phone: text })}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />

            <Text style={styles.sectionTitle}>🎂 Birth Date</Text>
            <TextInput
              style={[styles.input]}
              value={profile.birthdate}
              onChangeText={(text) => setProfile({ ...profile, birthdate: text })}
              placeholder="Enter your birthdate"
            />

            <Text style={styles.sectionTitle}>📍 Address</Text>
            <TextInput
              style={[styles.input]}
              value={profile.address}
              onChangeText={(text) => setProfile({ ...profile, address: text })}
              placeholder="Enter your address"
            />

            <TouchableOpacity
              style={[styles.button, { backgroundColor: isEditing ? '#4CAF50' : '#6200ee' }]}
              onPress={isEditing ? handleSave : () => setIsEditing(true)}
            >
              <Text style={styles.buttonText}>{isEditing ? 'Save Changes' : 'Edit Profile'}</Text>
            </TouchableOpacity>
   <TouchableOpacity
              style={[styles.button, { backgroundColor: '#6200ee' }]}
              onPress={handleOrderDetails}
            >
              <Text style={styles.buttonText}>{'Order Details'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#6200ee' }]}
              onPress={handleLogOut}
            >
              <Text style={styles.buttonText}>{'Log Out'}</Text>
            </TouchableOpacity>
          </View>
        </>
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
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
