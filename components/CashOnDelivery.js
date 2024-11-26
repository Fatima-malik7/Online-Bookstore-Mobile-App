// Cash on delivery
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from './Header1';
const CashOnDelivery = () => {
  const route = useRoute();
  const { subtotal = 0, deliveryCharges = 250 } = route.params || {};
  const totalPayment = subtotal + deliveryCharges;

  const handleOrder = () => {
    alert(`Order Confirmed! Total Payment: PKR ${totalPayment}`);
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.formWrapper}>
      <Text style={styles.header}>Cash On Delivery</Text>
      <Text style={styles.text}>Please review your order details:</Text>
      <View style={styles.summary}>
        <Text style={styles.item}>
          <Text style={styles.label}>Subtotal:</Text> PKR {subtotal}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.label}>Delivery Charges:</Text> PKR {deliveryCharges}
        </Text>
        <Text style={[styles.item, styles.total]}>
          <Text style={styles.label}>Total Payment:</Text> PKR {totalPayment}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOrder}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F6F4',
  },
  formWrapper: {
    height: '40%',
    width: '100%',
    maxWidth: 350,
    padding: 12,
    backgroundColor: '#f3f6f4',
    borderRadius: 25,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 3,
  },
  header: {
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 20,
    color: '#556B2F',
    textAlign: 'center',
  },
  text: {
    marginBottom: 20,
    textAlign: 'center',
  },
  summary: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#556B2F',
  },
  total: {
    fontWeight: 'bold',
    color: '#789D82',
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

export default CashOnDelivery;