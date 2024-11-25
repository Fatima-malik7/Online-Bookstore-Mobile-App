import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Story from '../Story'; // Ensure Story is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible
import a from  '../../assets/uf1.jpg'; // Ensure the path is correct
import b from '../../assets/uf2.jpg'; // Ensure the path is correct
import c from  '../../assets/uf3.jpg'; // Ensure the path is correct
import d from  '../../assets/uf4.jpg'; // Ensure the path is correct
import e from  '../../assets/uf5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "پری کی ملت کی کہانی",price: "100Rs", image: a },
  { name: "شیر اور خرگوش",price: "200Rs", image: b },
  { name: "ملک کا پوشیدہ محل",price: "300Rs", image: c },
  { name: "سنہری کہانی",price: "400Rs", image: d },
  { name: "میری کہانی میری دنیا",price: "500Rs", image: e },
];

function UFairytales({ addToCart }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Story heading="Urdu Fairytales" books={booksData} addToCart={addToCart} />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default UFairytales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
  },
  scrollContent: {
    flexGrow: 1, // Allow content to take up available space
  },
});
