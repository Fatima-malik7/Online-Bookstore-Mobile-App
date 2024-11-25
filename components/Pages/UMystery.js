import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from '../../assets/um1.jpg'; // Ensure the path is correct
import b from '../../assets/um2.jpg'; // Ensure the path is correct
import c from '../../assets/um3.jpg'; // Ensure the path is correct
import d from '../../assets/um4.jpg'; // Ensure the path is correct
import e from '../../assets/um5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "دستک", price: "100Rs", image: a },
  { name: "شر کا سہارا", price: "200Rs", image: b },
  { name: "30 گھنٹے", price: "300Rs", image: c },
  { name: "دولت کا جال", price: "400Rs", image: d },
  { name: "اجنبی لڑکی", price: "500Rs", image: e },
];

function UMystery({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Mystery" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default UMystery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
