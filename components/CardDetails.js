import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

// Firebase Database URL
const BASE_URL = 'https://bookbliss-f0256-default-rtdb.firebaseio.com/';

const CardDetails = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const navigation = useNavigation();

  // Function to validate input fields
  const validateInputs = () => {
    if (!cardHolder || !cardNumber || !cvv || !expiryDate) {
      Alert.alert('Error', 'Please fill in all fields.');
      return false;
    }
    if (cardNumber.length !== 16) {
      Alert.alert('Error', 'Card number must be 16 digits.');
      return false;
    }
    if (cvv.length !== 3) {
      Alert.alert('Error', 'CVV must be 3 digits.');
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      Alert.alert('Error', 'Expiry date must be in MM/YY format.');
      return false;
    }
    return true;
  };

  // Function to save card details to Firebase
  const saveCardDetailsToFirebase = async () => {
    if (!validateInputs()) return;

    const cardDetails = {
      cardHolder,
      cardNumber,
      cvv,
      expiryDate,
      timestamp: new Date().toISOString(), // Add timestamp for tracking
    };

    try {
      const response = await axios.post(`${BASE_URL}/cardDetails.json`, cardDetails);
      console.log('Card details saved:', response.data);
      Alert.alert('Success', 'Card details saved successfully!');

      // Navigate to CashOnDelivery with subtotal and delivery charges
      navigation.navigate('CashOnDelivery', { subtotal: 500, deliveryCharges: 100 });
    } catch (error) {
      console.error('Error saving card details:', error);

      if (error.response?.status === 401) {
        Alert.alert('Unauthorized', 'Failed to save card details. Check Firebase rules or authentication.');
      } else {
        Alert.alert('Error', 'Failed to save card details. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.header}>Enter Card Details</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Card Holder Name:</Text>
          <TextInput
            style={styles.input}
            value={cardHolder}
            onChangeText={setCardHolder}
            placeholder="John Doe"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Card Number:</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>CVV:</Text>
          <TextInput
            style={styles.input}
            value={cvv}
            onChangeText={setCvv}
            placeholder="123"
            maxLength={3}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Expiry Date (MM/YY):</Text>
          <TextInput
            style={styles.input}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="MM/YY"
            maxLength={5}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={saveCardDetailsToFirebase}>
          <Text style={styles.buttonText}>Save Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F6F4',
  },
  formWrapper: {
    height: '70%',
    width: '100%',
    maxWidth: 350,
    marginBottom: 80,
    padding: 12,
    backgroundColor: '#f3f6f4',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#556B2F',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#789D82',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CDD7D6',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#F5F8F7',
  },
  button: {
    backgroundColor: '#556b2f',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CardDetails;
