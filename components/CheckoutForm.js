import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CheckoutForm = ({ route, navigation }) => {
  const { selectedItems } = route.params || { selectedItems: [] };
  const [description, setDescription] = useState('');
  const [bookDetails, setBookDetails] = useState(selectedItems.map((item) => item.name).join(', '));
  const [bookPrice, setBookPrice] = useState(0);
  const deliveryCharges = 250;

  useEffect(() => {
    const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
    setBookPrice(totalPrice);
  }, [selectedItems]);

  const totalAmount = bookPrice + deliveryCharges;

  const handleConfirm = () => {
    navigation.navigate('Pay', { subtotal: bookPrice, deliveryCharges });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Address"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Book Details"
        value={bookDetails}
        onChangeText={setBookDetails}
      />
      <Text style={styles.text}>Book Price: Rs. {bookPrice}</Text>
      <Text style={styles.text}>Delivery Charges: Rs. {deliveryCharges}</Text>
      <Text style={styles.text}>Total Amount: Rs. {totalAmount}</Text>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, padding: 10, marginBottom: 16, borderRadius: 5 },
  text: { fontSize: 16, marginBottom: 8 },
  confirmButton: { backgroundColor: '#556b2f', padding: 12, alignItems: 'center', borderRadius: 5 },
  buttonText: { color: '#fff', fontSize: 18 },
});

export default CheckoutForm;