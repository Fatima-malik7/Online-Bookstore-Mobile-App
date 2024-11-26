import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // React Navigation

const Header = ({  notificationCount }) => {
  const navigation = useNavigation();

  // Handle navigation to Cart screen
  const handleAddToCart = () => {
    alert('Added to cart!');
    navigation.navigate('Cart'); // Navigate to Cart screen
  };

  // Handle navigation to Login screen
  const handleLogin = () => {
    alert('Profile Logout!');
    navigation.navigate('Auth'); // Navigate to Login screen
  };

  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <View style={styles.iconContainer}>
        {/* Cart Icon */}
        <TouchableOpacity style={styles.iconWrapper} onPress={handleAddToCart}>
          <FontAwesome name="shopping-cart" style={styles.icon} />
          {/* Display notification badge if notificationCount > 0 */}
          {notificationCount > 0 && <Text style={styles.cartBadge}>{notificationCount}</Text>}
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
    marginVertical: '15',
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
 // Cart Badge (for the Header cart icon)
 cartBadge: {
  position: 'absolute',
  top: -5,
  right: -10,
  backgroundColor: 'red',
  color: 'black',
  borderRadius: 50,
  paddingVertical: 3,
  paddingHorizontal: 8,
  fontSize: 10,
},
});
