import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from '../../assets/C_and_T1.jpg';
import b from '../../assets/C_and_T2.jpg';
import c from '../../assets/C_and_T3.jpg';
import d from '../../assets/C_and_T4.jpg';
import e from '../../assets/C_and_T5.jpg';

const booksData = [
  { name: "Murder on the Orient", price: "100Rs", image: a },
  { name: "Colleen Hoover", price: "200Rs", image: b },
  { name: "Gillian Flynn", price: "300Rs", image: c },
  { name: "The Silent Patient", price: "400Rs", image: d },
  { name: "The Housemaid", price: "500Rs", image: e },
];

function CrimeAndThirills({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Story heading="Crime and Thrills" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default CrimeAndThirills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
