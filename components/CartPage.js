import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header1';
import { database, ref, get, remove } from '../config/firebaseConfig'; // Firebase imports

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const navigation = useNavigation();

  // Fetch cart items from Firebase on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartRef = ref(database, 'cartItems');
        const snapshot = await get(cartRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const fetchedCartItems = Object.keys(data).map((key) => ({
            id: key, // Firebase unique key
            ...data[key],
          }));
          setCartItems(fetchedCartItems);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Remove an item from Firebase and local state
  const removeFromCart = async (itemId) => {
    try {
      const itemRef = ref(database, `cartItems/${itemId}`);
      await remove(itemRef); // Remove the item from Firebase
      setCartItems((prev) => prev.filter((item) => item.id !== itemId)); // Update local state
      console.log(`Item with ID ${itemId} removed from cart.`);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Handle selecting/deselecting items
  const handleSelectItem = (index) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle selection
    }));
  };

  // Handle checkout for selected items
  const handleCheckoutSelected = () => {
    const selected = cartItems.filter((_, index) => selectedItems[index]);
    if (selected.length === 0) {
      alert('Please select items to checkout. ');
      return;
    }
    setTimeout(() => {
      navigation.navigate('Checkout', { selectedItems: selected }); // Pass selected items to Checkout screen
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formWrapper}>
        <Text style={styles.header}>Your Cart</Text>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCart}>Your cart is empty.</Text>
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View style={styles.cartItem}>
                  {/* Custom checkbox */}
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      selectedItems[index] && styles.checkboxChecked,
                    ]}
                    onPress={() => handleSelectItem(index)}
                  >
                    {selectedItems[index] && (
                      <Text style={styles.checkboxText}>✔</Text>
                    )}
                  </TouchableOpacity>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemName}>{item.name}</Text>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeFromCart(item.id)} // Pass Firebase ID
                  >
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckoutSelected}
            >
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        )}
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
    width: '100%',
    maxWidth: 350,
    padding: 12,
    backgroundColor: '#f3f6f4',
    borderRadius: 25,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#556B2F',
    textAlign: 'center',
  },
  emptyCart: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#556b2f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#556b2f',
  },
  checkboxText: {
    color: '#fff',
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  checkoutButton: {
    backgroundColor: '#556b2f',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CartPage;
