import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <ScrollView contentContainerStyle={styles.footerContainer}>
      <View style={styles.footerLinks}>
        <TouchableOpacity onPress={() => toggleSection('contact')} style={styles.linkContainer}>
          <Text style={[styles.linkText, openSection === 'contact' && styles.activeLink]}>
            Contact Us
          </Text>
          {openSection === 'contact' && (
            <View style={styles.footerDetail}>
              <Text><Text style={styles.icon}>📞</Text> Phone: (123) 456-7890</Text>
              <Text><Text style={styles.icon}>📧</Text> Email: support@bookbliss.com</Text>
              <Text><Text style={styles.icon}>📍</Text> Address: 123 Book Bliss Ave, Library City, BK 10234</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleSection('about')} style={styles.linkContainer}>
          <Text style={[styles.linkText, openSection === 'about' && styles.activeLink]}>
            About
          </Text>
          {openSection === 'about' && (
            <View style={styles.footerDetail}>
              <Text>
                At Book Bliss, we believe in the transformative power of reading. Our mission is to provide a welcoming space for book lovers of all ages, where they can discover a diverse selection of titles spanning various genres—from timeless classics to contemporary bestsellers...
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleSection('shipping')} style={styles.linkContainer}>
          <Text style={[styles.linkText, openSection === 'shipping' && styles.activeLink]}>
            Shipping
          </Text>
          {openSection === 'shipping' && (
            <View style={styles.footerDetail}>
              <Text>
                At Book Bliss, we strive to make your shopping experience seamless and convenient. Enjoy free shipping on orders over PKR 2500, with standard delivery times of 5-7 business days...
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    paddingBottom: 40,
    textAlign: 'center',
    // Ensure content stays aligned at the bottom when footer is at bottom
    paddingTop: 10, // Optional, to control spacing
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
  },
  linkContainer: {
    marginBottom: 20,
  },
  linkText: {
    color: '#4b4b4b',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    textAlign: 'center',
  },
  activeLink: {
    borderBottomWidth: 2,
    borderBottomColor: '#556b2f',
  },
  footerDetail: {
    color: '#4b4b4b',
    marginTop: 8,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
});
