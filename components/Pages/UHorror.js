import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from '../../assets/uh1.jpg'; // Ensure the path is correct
import b from '../../assets/uh2.jpg'; // Ensure the path is correct
import c from '../../assets/uh3.jpg'; // Ensure the path is correct
import d from '../../assets/uh4.jpg'; // Ensure the path is correct
import e from '../../assets/uh5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "حریت کدا", price: "100Rs", image: a },
  { name: "پاگل خانہ", price: "200Rs", image: b },
  { name: "نظر خراب", price: "300Rs", image: c },
  { name: "سدیو باد", price: "400Rs", image: d },
  { name: "عرف", price: "500Rs", image: e },
];

function UHorror({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Urdu Horror" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default UHorror;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
