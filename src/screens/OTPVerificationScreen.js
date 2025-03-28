import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const OTPVerificationScreen = ({ route, navigation }) => {
  // Extract all passed props from the route parameters
  const { otpCode, username, email, password } = route.params;
  const [enteredOTP, setEnteredOTP] = useState('');

  // Pre-fill OTP input when screen loads
  useEffect(() => {
    if (otpCode) {
      setEnteredOTP(otpCode.toString());
    }
  }, [otpCode]);

  const handleVerifyOTP = async () => {
    if (!enteredOTP) {
      Alert.alert('Error', 'Please enter the OTP.');
      return;
    }
    
    // Verify if the entered OTP matches the generated OTP
    if (enteredOTP !== otpCode.toString()) {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
      return;
    }

    try {
      // Call the post API with username, email, and password
      const response = await fetch('http://localhost:8093/addEndUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
        console.log("Response data:", data);

      if (response.ok) {
        Alert.alert('Success', 'User registered successfully!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
      } else {
        Alert.alert('Error', data.message || 'Registration failed');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'An error occurred during registration');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>
        Enter the 6-digit OTP code:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={enteredOTP} // Pre-filled OTP
        onChangeText={setEnteredOTP}
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 10,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OTPVerificationScreen;
