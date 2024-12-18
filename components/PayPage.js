import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './Header1';

const PayPage = () => {
  const route = useRoute(); // Using the useRoute hook
  const { subtotal = 0, deliveryCharges = 0 } = route.params || {};
  const navigation = useNavigation();

  const handlePayment = (method) => {
    if (method === 'card-details') {
      navigation.navigate('CardDetails', { subtotal, deliveryCharges });
    } else {
      navigation.navigate('CashOnDelivery', { subtotal, deliveryCharges });
    }
  };

  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.formWrapper}>
        <Text style={styles.header}>Select Payment Method</Text>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => handlePayment('card-details')}
        >
          <Text style={styles.buttonText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => handlePayment('cash-on-delivery')}
        >
          <Text style={styles.buttonText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f3f6f4',
      },
      formWrapper: {
        height: '30%',
        width: '100%',
        maxWidth: 350,
        padding: 12,
        backgroundColor: '#f3f6f4',
        borderRadius: 25,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 3,
      },
      header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#556b2f',
        marginBottom: 20,
        padding: 15,
      },
  paymentButton: { backgroundColor: '#556b2f', padding: 12, alignItems: 'center', borderRadius: 5, marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 18 },
});

export default PayPage;