import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PayPage = ({ route, navigation }) => {
  const { subtotal, deliveryCharges } = route.params || { subtotal: 0, deliveryCharges: 0 };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Payment Method</Text>
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate('CardDetails', { subtotal, deliveryCharges })}
      >
        <Text style={styles.buttonText}>Credit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate('CashOnDelivery', { subtotal, deliveryCharges })}
      >
        <Text style={styles.buttonText}>Cash on Delivery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  paymentButton: { backgroundColor: '#556b2f', padding: 12, alignItems: 'center', borderRadius: 5, marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 18 },
});

export default PayPage;