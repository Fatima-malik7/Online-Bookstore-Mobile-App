//Checkout
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header1';
import { useNavigation } from '@react-navigation/native';
const CheckoutForm = ({ selectedItems = [] }) => {
  const [description, setDescription] = useState('');
  const [bookPrice, setBookPrice] = useState(0);
  const deliveryCharges = 250;
  const navigation = useNavigation();
  useEffect(() => {
    console.log("Selected Items:", selectedItems); // Debug log
    const totalPrice = selectedItems.reduce((total, item) => total + (item.price || 0), 0);
    setBookPrice(totalPrice);
  }, [selectedItems]);
  
  const totalAmount = bookPrice + deliveryCharges;

  const handleConfirm = () => {
    navigation.navigate('PayPage', { subtotal: bookPrice, deliveryCharges });
  };

  return (
    <View style={styles.checkoutContainer}>
      <Header/>
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.heading}>Checkout</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Address"
          value={description}
          onChangeText={setDescription}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Book Price:</Text>
            <Text style={styles.value}>Rs. {bookPrice}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Delivery Charges:</Text>
            <Text style={styles.value}>Rs. {deliveryCharges}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Total Amount:</Text>
            <Text style={[styles.value, styles.total]}>Rs. {totalAmount}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f3f6f4',
  },
  cardDetailsContainer: {
    width: '95%',
    height:'70%',
    maxWidth: 400,
    borderRadius: 16,
    backgroundColor: '#f3f6f4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 20,
    marginBottom:80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight:'bold',
    color: '#556b2f',
  marginBottom: 60,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b0b3b0',
    backgroundColor: '#efefef',
    marginBottom: 20,
    fontSize: 16,
  },
  detailsContainer: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b0b3b0',
    backgroundColor: '#efefef',
    padding: 12,
    marginBottom: 60,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#556b2f',
  },
  total: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#556b2f',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CheckoutForm;