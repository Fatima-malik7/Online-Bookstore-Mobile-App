import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../AppStyling';

const Login = ({ toggleAuth }) => {
    const navigation = useNavigation();

    const handleLogin = () => {
        // Add your login logic here
        Alert.alert('Login clicked!');
        navigation.navigate('Home'); // Redirect after successful login
    };

    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
            <Image source={require('../assets/logo.jpg')} style={styles.logo} />
                <Text style={styles.formWrapperHeading}>Sign In</Text>
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
                            placeholder="Password" 
                            secureTextEntry 
                            style={styles.input} 
                            placeholderTextColor="#aaa" 
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
