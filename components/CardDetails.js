import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Header from './Header1';
import { useNavigation } from '@react-navigation/native';
const BASE_URL = 'https://bookbliss-f0256-default-rtdb.firebaseio.com/';

const CardDetails = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false); // State to manage processing state

  const navigation = useNavigation();
  const validateInputs = () => {
    const newErrors = {};
    if (!cardHolder) {
      newErrors.cardHolder = 'Cardholder name is required.';
    } else if (cardHolder !== cardHolder.toUpperCase()) {
      newErrors.cardHolder = 'Name must be in uppercase.';
    }

    if (!cardNumber) {
      newErrors.cardNumber = 'Card number is required.';
    } else if (cardNumber.length !== 16) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }

    if (!cvv) {
      newErrors.cvv = 'CVV is required.';
    } else if (cvv.length !== 3) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }

    if (!expiryDate) {
      newErrors.expiryDate = 'Expiry date is required.';
    } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveCardDetailsToFirebase = async () => {
    if (!validateInputs()) return;

    setIsProcessing(true); // Set processing state

    const cardDetails = {
      cardHolder,
      cardNumber,
      cvv,
      expiryDate,
      timestamp: new Date().toISOString(),
    };

    try {
      // Simulate server delay for 3 seconds
      console.log('Processing...');
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Save card details to Firebase
      console.log('Saving card details to Firebase...');
      await axios.post(`${BASE_URL}/cardDetails.json`, cardDetails);
      console.log('Card details saved:', cardDetails);
      Alert.alert(
        'Payment Success 🎉',
        "Thank you for the order, Continue Shopping! 😊",)
      // Show success message after processing time
      setTimeout(() => {
          [
            {
              text: 'OK',
              onPress: () => {
                // Reset state after success
                setCardHolder('');
                setCardNumber('');
                setCvv('');
                setExpiryDate('');
                setErrors({});
                setIsProcessing(false); // Reset processing state
              },
            },
          ]
        navigation.navigate('Home');
      }, 3000); // Delay alert for 1 second after processing

    } catch (error) {
      console.error('Error saving card details:', error);

      Alert.alert(
        'Error',
        'Failed to save card details. Please try again.',
        [{ text: 'OK', onPress: () => setIsProcessing(false) }] // Reset processing state
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Enter Card Details</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Card Holder Name:</Text>
          <TextInput
            style={[styles.input, errors.cardHolder && styles.inputError]}
            value={cardHolder}
            onChangeText={setCardHolder}
            placeholder="FATIMA MALIK"
            autoCapitalize="characters"
          />
          {errors.cardHolder && <Text style={styles.errorText}>{errors.cardHolder}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Card Number:</Text>
          <TextInput
            style={[styles.input, errors.cardNumber && styles.inputError]}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            keyboardType="numeric"
          />
          {errors.cardNumber && <Text style={styles.errorText}>{errors.cardNumber}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>CVV:</Text>
          <TextInput
            style={[styles.input, errors.cvv && styles.inputError]}
            value={cvv}
            onChangeText={setCvv}
            placeholder="123"
            maxLength={3}
            keyboardType="numeric"
          />
          {errors.cvv && <Text style={styles.errorText}>{errors.cvv}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Expiry Date (MM/YY):</Text>
          <TextInput
            style={[styles.input, errors.expiryDate && styles.inputError]}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="MM/YY"
            maxLength={5}
          />
          {errors.expiryDate && <Text style={styles.errorText}>{errors.expiryDate}</Text>}
        </View>

        <TouchableOpacity
          style={[styles.button, isProcessing && { backgroundColor: '#A5B2A5' }]}
          onPress={saveCardDetailsToFirebase}
          disabled={isProcessing}
        >
          <Text style={styles.buttonText}>{isProcessing ? 'Processing...' : 'Confirm'}</Text>
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
    marginBottom: 70,
    padding: 12,
    backgroundColor: '#f3f6f4',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
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
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
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
