import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header'; 
import styles from '../AppStyling';

const Story = ({ heading, books = [], addToCart, notificationCount = 0, cartItems = [] }) => {
  const navigation = useNavigation();
  
  // This state will keep track of the updated cart count
  const [cartCount, setCartCount] = useState(cartItems.length);

  const handleBuyNow = (book) => {
    navigation.navigate('Checkout', { selectedItems: [book] }); // Pass as an array
  };

  const handleAddToCart = (book) => {
    addToCart(book);  // Add the book to the cart
    setCartCount(cartCount + 1);  // Update the cart count when a book is added
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
                <Image source={ book.image } style={styles.bookImage} />
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