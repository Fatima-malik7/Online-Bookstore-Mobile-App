import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from '../../assets/ul1.jpg'; // Ensure the path is correct
import b from '../../assets/ul2.jpg'; // Ensure the path is correct
import c from '../../assets/ul3.jpg'; // Ensure the path is correct
import d from '../../assets/ul4.jpg'; // Ensure the path is correct
import e from '../../assets/ul5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "کلیات اقبال", price: "100Rs", image: a },
  { name: "غالب", price: "200Rs", image: b },
  { name: "شارح دیوان", price: "300Rs", image: c },
  { name: "کراچی میں اردو غزل یا نظم", price: "400Rs", image: d },
  { name: "آزاد نظم", price: "500Rs", image: e },
];

function ULitrature({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Urdu Literature" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default ULitrature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
