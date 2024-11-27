//Faritails.js

import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import Story from '../Story'; 
import Footer from '../Footer'; 
import a from '../../assets/f1.jpg';
import b from '../../assets/f2.jpg';
import c from '../../assets/f3.jpg';
import d from '../../assets/f4.jpg';
import e from '../../assets/f5.jpg';

const booksData = [
  { name: "Snow White", price: "100Rs", image: a },
  { name: "Rapunzel", price: "200Rs", image: b },
  { name: "Hansel and Gretel", price: "300Rs", image: c },
  { name: "Cinderella", price: "400Rs", image: d },
  { name: "Little Red Riding Hood", price: "500Rs", image: e },
];

function Fairytails({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Fairytales" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default Fairytails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
