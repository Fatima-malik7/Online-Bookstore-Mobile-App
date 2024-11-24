import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Section from '../Section'; // Ensure Section is React Native compatible
import Footer from '../Footer'; // Ensure Footer is React Native compatible

function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContent}>
        <Section />
      </ScrollView>
      <Footer />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default background color
    justifyContent: 'flex-end', // Push the footer to the bottom
  },
  mainContent: {
    flexGrow: 1, // Allows content to take up remaining space
  },
});
