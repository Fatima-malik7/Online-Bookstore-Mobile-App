import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header'; 
import styles from '../AppStyling';
const Story = ({ heading, books = [], addToCart, notificationCount = 0, cartItems = [] }) => {
  const navigation = useNavigation();

  const handleBuyNow = (book) => {
    navigation.navigate('Checkout', { selectedItems: [book] }); // Pass as an array
  };
  

  return (
    <View style={styles.storycontainer}>
              <Header cartCount={cartItems.length} notificationCount={notificationCount} />
      <View style={styles.sContainer}>
        <View style={styles.bookList}>
          <Text style={styles.heading}>{heading}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {books.map((book, index) => (
              <View key={index} style={styles.bookCard}>
                <Image source={ book.image } style={styles.bookImage} />
                <Text style={styles.bookTitle}>{book.name}</Text>
                <Text style={styles.bookTitle}>{book.price}</Text>
                <TouchableOpacity onPress={() => addToCart(book)} style={styles.addButton}>
  <Text style={styles.buttonText}>Add to Cart</Text>
</TouchableOpacity>

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
