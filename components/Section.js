import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header'; 
import b from '../assets/Crme&thills.jpg';
import c from '../assets/faritail.jpg';
import d from '../assets/fiction.jpg';
import i from '../assets/horror.jpg';
import j from '../assets/Mystery.jpg';
import m from '../assets/litrature.jpg';

function Section({ cartItems = [], notificationCount = 0 }) {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Header cartCount={cartItems.length} notificationCount={notificationCount} />
      <View style={styles.sectionContainer}>
        <View style={styles.searchBarContainer}>
          <TextInput 
            style={styles.searchBar} 
            placeholder="Book, Category, Author" 
            placeholderTextColor="#aaa" 
          />
        </View>
        <Text style={styles.heading}>English</Text>
        <ScrollView horizontal contentContainerStyle={styles.imageScroll}>
          <TouchableOpacity onPress={() => navigateTo('CrimeAndThrills')}>
            <Image source={b} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Fairytales')}>
            <Image source={c} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Friction')}>
            <Image source={d} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Horror')}>
            <Image source={i} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Mystery')}>
            <Image source={j} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Literature')}>
            <Image source={m} style={styles.image} />
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.heading}>Urdu</Text>
        <ScrollView horizontal contentContainerStyle={styles.imageScroll}>
          <TouchableOpacity onPress={() => navigateTo('UCrimeAndThrills')}>
            <Image source={b} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('UFairytales')}>
            <Image source={c} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('UFriction')}>
            <Image source={d} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('UHorror')}>
            <Image source={i} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('UMystery')}>
            <Image source={j} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('ULiterature')}>
            <Image source={m} style={styles.image} />
          </TouchableOpacity>
        </ScrollView>
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
