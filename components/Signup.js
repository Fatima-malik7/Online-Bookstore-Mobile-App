import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, database } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import styles from '../AppStyling';

const Signup = ({ toggleAuth }) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Save user data to Realtime Database
        const userRef = ref(database, `users/${user.uid}`);
        set(userRef, {
          username: username,
          email: email,
        })
          .then(() => {
            Alert.alert('Signup successful!');
            setTimeout(() => {
              navigation.navigate('Home');
            }, 3000); 
          })
          .catch((error) => {
            Alert.alert('Error saving data: ' + error.message);
          });
      })
      .catch((error) => {
        Alert.alert('Error: ' + error.message);
      });
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formWrapper}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.formWrapperHeading}>Sign Up</Text>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Username"
              style={styles.input}
              placeholderTextColor="#aaa"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Confirm password"
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#aaa"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            <Text>Already have an account? </Text>
            <Text onPress={toggleAuth} style={styles.link}>Sign in here</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;