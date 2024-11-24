import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../AppStyling';

const Signup = ({ toggleAuth }) => {
    const navigation = useNavigation();

    const handleSignup = () => {
        // Add your signup logic here
        Alert.alert('Sign up clicked!');
        navigation.navigate('Home'); // Redirect after successful signup
    };

    return (
        <View style={styles.container}>
            {/* <Image source={require('../assets/logo.jpg')} style={styles.logo} /> */}
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <TextInput 
                        placeholder="Username" 
                        style={styles.input} 
                        placeholderTextColor="#aaa" 
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput 
                        placeholder="Email" 
                        style={styles.input} 
                        placeholderTextColor="#aaa" 
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput 
                        placeholder="Password" 
                        secureTextEntry 
                        style={styles.input} 
                        placeholderTextColor="#aaa" 
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput 
                        placeholder="Confirm password" 
                        secureTextEntry 
                        style={styles.input} 
                        placeholderTextColor="#aaa" 
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
    );
};

export default Signup;
