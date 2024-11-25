//cartpage
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import Material Icons or any other icon library
import Header from './Header1';
const CartPage = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Book 1', price: 500, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Book 2', price: 600, image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Book 3', price: 700, image: 'https://via.placeholder.com/50' },
  ]);
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelectItem = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectAll = () => {
    const allSelected = cartItems.every((item) => selectedItems[item.id]);
    if (allSelected) {
      setSelectedItems({});
    } else {
      const newSelectedItems = {};
      cartItems.forEach((item) => {
        newSelectedItems[item.id] = true;
      });
      setSelectedItems(newSelectedItems);
    }
  };

  const handleCheckoutSelected = () => {
    const selected = cartItems.filter((item) => selectedItems[item.id]);
    if (selected.length === 0) {
      alert('No items selected for checkout!');
    } else {
      navigation.navigate('Checkout', { selectedItems: selected });
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    const updatedSelectedItems = { ...selectedItems };
    delete updatedSelectedItems[id];
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formWrapper}>
        <Text style={styles.header}>Your Cart</Text>
        
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCart}>Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <TouchableOpacity onPress={() => handleSelectItem(item.id)} style={styles.imageContainer}>
                  <Image source={ item.image } style={styles.image} />
                  {selectedItems[item.id] && (
                    <MaterialIcons name="check-circle" size={24} color="#556b2f" style={styles.selectedIcon} />
                  )}
                </TouchableOpacity>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
                <Button title="Remove" color={'#FF0000'} onPress={() => removeFromCart(item.id)} />
              </View>
            )}
          />
        )}
        <TouchableOpacity style={styles.selectAllButton} onPress={handleSelectAll}>
          <Text style={styles.selectAllText}>
            {cartItems.every((item) => selectedItems[item.id]) ? 'Deselect All' : 'Select All'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckoutSelected}>
          <Text style={styles.buttonText}>Checkout</Text>
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
    backgroundColor: '#f3f6f4',
    padding: 20,
  },
  formWrapper: {
    height: '70%',
    width: '100%',
    marginBottom:80,
    maxWidth: 350,
    padding: 20,
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
  },
  selectAllButton: {
    backgroundColor: '#556b2f',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    alignItems: 'center',
  },
  selectAllText: {
    color: '#fff',
    fontSize: 16,
  },
  emptyCart: {
    fontSize: 14,
    textAlign: 'center',
    color: '#8f9779',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#efefef',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b0b3b0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  selectedIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  itemDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#8f9779',
  },
  checkoutButton: {
    backgroundColor: '#556b2f',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CartPage;