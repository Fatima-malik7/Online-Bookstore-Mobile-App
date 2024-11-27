import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header'; 
import b from '../assets/Crme&thills.jpg';
import c from '../assets/faritail.jpg';
import d from '../assets/fiction.jpg';
import i from '../assets/horror.jpg';
import j from '../assets/Mystery.jpg';
import m from '../assets/litrature.jpg';

const bookData = {
  English: [
    { id: '1', name: 'Crime And Thrills', image: b, screen: 'CrimeAndThrills' },
    { id: '2', name: 'Fairytales', image: c, screen: 'Fairytales' },
    { id: '3', name: 'Friction', image: d, screen: 'Friction' },
    { id: '4', name: 'Horror', image: i, screen: 'Horror' },
    { id: '5', name: 'Mystery', image: j, screen: 'Mystery' },
    { id: '6', name: 'Literature', image: m, screen: 'Literature' },
  ],
  Urdu: [
    { id: '7', name: 'Crime And Thrills', image: b, screen: 'UCrimeAndThrills' },
    { id: '8', name: 'Fairytales', image: c, screen: 'UFairytales' },
    { id: '9', name: 'Friction', image: d, screen: 'UFriction' },
    { id: '10', name: 'Horror', image: i, screen: 'UHorror' },
    { id: '11', name: 'Mystery', image: j, screen: 'UMystery' },
    { id: '12', name: 'Literature', image: m, screen: 'ULiterature' },
  ],
};

function Section({ cartItems = [], notificationCount = 0 }) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const filterBooks = (category) => {
    if (searchQuery.toLowerCase().includes(category.toLowerCase())) {
      return bookData[category];
    }
    return bookData[category].filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <Header cartCount={cartItems.length} notificationCount={notificationCount} />
      <View style={styles.sectionContainer}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Book, Author..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {filterBooks('English').length > 0 && (
          <>
            <Text style={styles.heading}>English</Text>
            <ScrollView horizontal contentContainerStyle={styles.imageScroll}>
              {filterBooks('English').map((book) => (
                <TouchableOpacity key={book.id} onPress={() => navigateTo(book.screen)}>
                  <Image source={book.image} style={styles.image} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}

        {filterBooks('Urdu').length > 0 && (
          <>
            <Text style={styles.heading}>Urdu</Text>
            <ScrollView horizontal contentContainerStyle={styles.imageScroll}>
              {filterBooks('Urdu').map((book) => (
                <TouchableOpacity key={book.id} onPress={() => navigateTo(book.screen)}>
                  <Image source={book.image} style={styles.image} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
}

export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  searchBarContainer: {
    marginBottom: 30,
    width: '100%',
  },
  searchBar: {
    width: '100%',
    maxWidth: 800,
    padding: 10,
    paddingLeft: 30,
    borderWidth: 2,
    borderColor: '#556b2f',
    borderRadius: 7,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 25,
    marginVertical: 10,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#556b2f',
    borderRadius: 5,
    textAlign: 'center',
  },
  imageScroll: {
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginHorizontal: 10,
    resizeMode: 'cover',
  },
});
