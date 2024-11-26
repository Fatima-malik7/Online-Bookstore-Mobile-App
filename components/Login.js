import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig'; // Ensure this path is correct
import styles from '../AppStyling';

const Login = ({ toggleAuth }) => {
    const navigation = useNavigation();

    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Please fill in all fields!');
            return;
        }

        // Firebase authentication: Sign in user
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                Alert.alert('Login successful!', `Welcome back, ${user.email}`);
                navigation.navigate('Home'); // Redirect to the Home screen
            })
            .catch((error) => {
                const errorMessage = error.message;
                Alert.alert('Login failed', errorMessage);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <Image source={require('../assets/logo.jpg')} style={styles.logo} />
                <Text style={styles.formWrapperHeading}>Sign In</Text>
                <View style={styles.form}>
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
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.signupText}>
                        <Text>Don't have an account? </Text>
                        <Text onPress={toggleAuth} style={styles.link}>Sign up here</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Login;
