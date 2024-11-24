import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardDetails = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const navigation = useNavigation();

  const handleConfirmPayment = () => {
    // Navigate to CashOnDelivery with sample data
    navigation.navigate('CashOnDelivery', { subtotal: 500, deliveryCharges: 100 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Credit/Debit Card Payment</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Card Holder Name:</Text>
        <TextInput
          style={styles.input}
          value={cardHolder}
          onChangeText={setCardHolder}
          placeholder="FATIMA MALIK"
          required
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
        <Text style={styles.label}>Expiry Date:</Text>
        <TextInput
          style={styles.input}
          value={expiryDate}
          onChangeText={setExpiryDate}
          placeholder="MM/YY"
          maxLength={5}
        />
      </View>
      <Button title="Confirm Payment" onPress={handleConfirmPayment} color="#789D82" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EFF2F1',
  },
  header: {
    fontSize: 20,
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
});

export default CardDetails;
