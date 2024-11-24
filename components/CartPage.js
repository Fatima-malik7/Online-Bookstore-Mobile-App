import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native';

const CartPage = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Book 1', price: 500, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Book 2', price: 600, image: 'https://via.placeholder.com/50' },
  ]);
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelectItem = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCheckoutSelected = () => {
    const selected = cartItems.filter((item) => selectedItems[item.id]);
    navigation.navigate('Checkout', { selectedItems: selected });
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <TouchableOpacity onPress={() => handleSelectItem(item.id)}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableOpacity>
              <Text>{item.name}</Text>
              <Button title="Remove" onPress={() => removeFromCart(item.id)} />
            </View>
          )}
        />
      )}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckoutSelected}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  emptyCart: { fontSize: 18, color: 'gray', textAlign: 'center' },
  cartItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  image: { width: 50, height: 50, marginRight: 10 },
  checkoutButton: { backgroundColor: '#556b2f', padding: 12, alignItems: 'center', borderRadius: 5 },
  buttonText: { color: '#fff', fontSize: 18 },
});

export default CartPage;