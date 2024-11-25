import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // React Navigation

const Header = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert("Profile Logout!");
    navigation.navigate('Auth'); // Navigate to Login screen
  };

  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <TouchableOpacity style={styles.userIcon} onPress={handleLogin}>
        <FontAwesome name="user" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 150,
    backgroundColor: '#ffffff',
    height: 60,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    gap:'250',
    marginBottom:95,
  },
  logo: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  userIcon: {
    padding: 15,
  },
  icon: {
    fontSize: 24,
    color: '#696A22',
  },
});
