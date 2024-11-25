import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is compatible with React Native
import Footer from '../Footer'; // Ensure Footer is compatible with React Native
import a from '../../assets/M1.jpg';
import b from '../../assets/M2.jpg';
import c from '../../assets/M3.jpg';
import d from '../../assets/M4.jpg';
import e from '../../assets/M5.jpg';

const booksData = [
  { name: "The Da Vinci Code", price: "100Rs", image: a },
  { name: "The God of Woods", price: "200Rs", image: b },
  { name: "The Girl on the Train", price: "300Rs", image: c },
  { name: "The Girl with Dragon Tattoo", price: "400Rs", image: d },
  { name: "Gillian Flynn", price: "500Rs", image: e },
];

function Mystery({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Mystery" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default Mystery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
