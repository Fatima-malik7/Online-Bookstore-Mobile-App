import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from '../../assets/UC&T1.jpg';
import b from '../../assets/UC&T2.jpg';
import c from '../../assets/UC&T3.jpg';
import d from '../../assets/UC&T4.jpg';
import e from '../../assets/UC&T5.jpg';

const booksData = [
  { name: "شیش محل", price: "100Rs", image: a },
  { name: "میں ایک جاسوس تھا", price: "200Rs", image: b },
  { name: "جرم و سزا", price: "300Rs", image: c },
  { name: "2 جرم و سزا", price: "400Rs", image: d },
  { name: "سرد کھائی", price: "500Rs", image: e },
];

function UCrimeAndThirills({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Urdu Crime and Thrills" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default UCrimeAndThirills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
