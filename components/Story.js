import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header'; 
import styles from '../AppStyling';
import { database, ref, push, set } from '../config/firebaseConfig'; // Firebase imports

const Story = ({ heading, books = [], notificationCount = 0, cartItems = [] }) => {
  const navigation = useNavigation();

  // State to keep track of the cart count
  const [cartCount, setCartCount] = useState(cartItems.length);

  // Function to handle buying now
  const handleBuyNow = (book) => {
    setTimeout(() => {
      navigation.navigate('Checkout', { selectedItems: [book] }); // Pass as an array
    }, 3000); 
  };

  // Function to handle adding items to the cart
  const handleAddToCart = async (book) => {
    try {
      // Add item to Firebase
      const cartRef = ref(database, 'cartItems'); // Firebase reference for cart
      const newCartItemRef = push(cartRef); // Create a new item reference
      await set(newCartItemRef, book); // Save the book to Firebase
      console.log('Book added to Firebase cart:', book);

      // Update cart count locally
      setCartCount(cartCount + 1); 
    } catch (error) {
      console.error('Error adding book to Firebase cart:', error);
    }
  };

  return (
    <View style={styles.storycontainer}>
      {/* Pass updated cart count and notification count to Header */}
      <Header cartCount={cartCount} notificationCount={cartCount} />

      <View style={styles.sContainer}>
        <View style={styles.bookList}>
          <Text style={styles.heading}>{heading}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {books.map((book, index) => (
              <View key={index} style={styles.bookCard}>
                <Image source={book.image} style={styles.bookImage} />
                <Text style={styles.bookTitle}>{book.name}</Text>
                <Text style={styles.bookTitle}>{book.price}</Text>

                {/* Add to Cart Button */}
                <TouchableOpacity onPress={() => handleAddToCart(book)} style={styles.addButton}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>

                {/* Buy Now Button */}
                <TouchableOpacity onPress={() => handleBuyNow(book)} style={styles.buyNowButton}>
                  <Text style={styles.buttonText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Story;
