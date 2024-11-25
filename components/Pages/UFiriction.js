import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from '../../assets/ufriction1.jpg';
import b from '../../assets/ufriction2.jpg';
import c from '../../assets/ufriction3.jpg';
import d from '../../assets/ufriction4.jpg';
import e from '../../assets/ufriction5.jpg';

const booksData = [
  { name: "روح یام", price: "100Rs", image: a },
  { name: "اب حیات", price: "200Rs", image: b },
  { name: "نمل", price: "300Rs", image: c },
  { name: "جنت کے پتے", price: "400Rs", image: d },
  { name: "پیر کامل", price: "500Rs", image: e },
];

function UFiriction({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Urdu Friction" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default UFiriction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
