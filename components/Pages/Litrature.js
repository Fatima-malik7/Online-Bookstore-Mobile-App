import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is compatible with React Native
import Footer from '../Footer'; // Ensure Footer is compatible with React Native
import a from '../../assets/L1.jpg'; 
import b from '../../assets/L2.jpg'; 
import c from '../../assets/L3.jpg'; 
import d from '../../assets/L4.jpg'; 
import e from '../../assets/L5.jpg'; 

const booksData = [
  { name: "Middlemarch", price: "100Rs", image: a },
  { name: "The Trial", price: "200Rs", image: b },
  { name: "Jane Eyre", price: "300Rs", image: c },
  { name: "Little Women", price: "400Rs", image: d },
  { name: "Anna Karenina", price: "500Rs", image: e },
];

function Litrature({ addToCart }) {
  return (
    <View style={styles.container}>
<ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Literature" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default Litrature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color for the screen
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
