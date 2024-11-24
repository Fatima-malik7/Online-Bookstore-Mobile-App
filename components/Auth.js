import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import Login from './Login'; 
import Signup from '../../myapp/components/Signup'; 
import Header from '../../myapp/components/Header1'; 
import styles from '../../myapp/AppStyling';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.authContainer}>
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
