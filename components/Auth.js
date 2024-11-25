import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import Login from './Login'; 
import Signup from './Signup'; 
import Header from './Header1'; 
import styles from '../AppStyling';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        {isLogin ? (
          <Animated.View style={styles.formContainer}>
            <Login toggleAuth={toggleAuth} />
          </Animated.View>
        ) : (
          <Animated.View style={styles.formContainer}>
            <Signup toggleAuth={toggleAuth} />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default Auth;
