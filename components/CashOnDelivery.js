import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CashOnDelivery = () => {
  const route = useRoute();
  const { subtotal = 0, deliveryCharges = 250 } = route.params || {};
  const totalPayment = subtotal + deliveryCharges;

  const handleOrder = () => {
    alert(`Order Confirmed! Total Payment: PKR ${totalPayment}`);
  };

  return (
    <View style={styles.container}>
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
      <Button title="Confirm Order" onPress={handleOrder} color="#789D82" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F6F4',
  },
  header: {
    fontSize: 20,
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
});

export default CashOnDelivery;
