import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './Header1';

const CheckoutForm = () => {
  const route = useRoute();
  const { selectedItems = [] } = route.params || {};
  const [description, setDescription] = useState('');
  const [bookDetails, setBookDetails] = useState(selectedItems.map(item => item.name).join(', '));
  const [bookPrice, setBookPrice] = useState(0); // Initialize to 0
  const deliveryCharges = 250;
  const navigation = useNavigation();

  // Calculate bookPrice and totalAmount when selectedItems change
  useEffect(() => {
    const totalPrice = selectedItems.reduce((total, item) => parseFloat(total) + parseFloat(item.price), 0);
    setBookPrice(parseFloat(totalPrice));
  }, [selectedItems]);

  const totalAmount = bookPrice + deliveryCharges;

  const handleConfirm = () => {
    navigation.navigate('Pay', { subtotal: bookPrice, deliveryCharges });
    Alert.alert('Success', 'Confirmed details!');
  };

  return (
    <View style={styles.checkoutContainer}>
      <Header />
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.heading}>Check Out</Text>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address:</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={setDescription}
              placeholder="Enter your Address"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Book Details:</Text>
            <TextInput
              style={styles.input}
              value={bookDetails}
              onChangeText={setBookDetails}
              placeholder="Enter book details"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Book Price:</Text>
            <TextInput
              style={styles.input}
              value={`Rs. ${bookPrice}`}
              editable={false}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Delivery Charges:</Text>
            <TextInput
              style={styles.input}
              value={`Rs. ${deliveryCharges}`}
              editable={false}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Total:</Text>
            <TextInput
              style={styles.input}
              value={`Rs. ${totalAmount}`}
              editable={false}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
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
    maxWidth: 400,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#556b2f',
    marginBottom: 5,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b0b3b0',
    backgroundColor: '#efefef',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#556b2f',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CheckoutForm;
