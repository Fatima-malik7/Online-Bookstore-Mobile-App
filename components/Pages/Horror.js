import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from '../../assets/h1.jpg';
import b from '../../assets/h2.jpg';
import c from '../../assets/h3.jpg';
import d from '../../assets/h4.jpg';
import e from '../../assets/h5.jpg';

const booksData = [
  { name: "Sleep Tight", price: "100Rs", image: a },
  { name: "The Exorcist", price: "200Rs", image: b },
  { name: "Stephen King", price: "300Rs", image: c },
  { name: "Frankenstein", price: "400Rs", image: d },
  { name: "Shirley Jackson", price: "500Rs", image: e },
];

function Horror({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Horror" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default Horror;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
