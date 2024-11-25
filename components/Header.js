import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // React Navigation

const Header = ({ cartCount, notificationCount }) => {
  const navigation = useNavigation();

  const handleAddToCart = () => {
    alert('Added to cart!');
    navigation.navigate('Cart'); // Navigate to Cart screen
  };

  const handleLogin = () => {
    alert('Profile Logout!');
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <View style={styles.iconContainer}>
        {/* Cart Icon */}
        <TouchableOpacity style={styles.iconWrapper} onPress={handleAddToCart}>
          <FontAwesome name="shopping-cart" style={styles.icon} />
          {cartCount > 0 && <Text style={styles.badge}>{cartCount}</Text>}
        </TouchableOpacity>

        {/* User Icon */}
        <TouchableOpacity onPress={handleLogin}>
          <FontAwesome name="user" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical:'15',
    backgroundColor: '#ffffff',
    height: 70, // Adjusted height
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    marginHorizontal: 10,
  },
  icon: {
    fontSize: 24,
    color: '#696A22',
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#444528',
    color: 'white',
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 12,
    top: -5,
    right: -10,
    textAlign: 'center',
  },
});
