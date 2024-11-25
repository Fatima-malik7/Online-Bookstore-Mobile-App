import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Story from './components/Story';
import Auth from './components/Auth';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Pages/Home';
import CrimeAndThrills from './components/Pages/CrimeAndThirills';
import Fairytails from './components/Pages/Faritails';
import Friction from './components/Pages/Friction';
import Literature from './components/Pages/Litrature';
import Mystery from './components/Pages/Mystery';
import Horror from './components/Pages/Horror';
import UCrimeAndThrills from './components/Pages/UCrimeAndThirills';
import UFairytales from './components/Pages/UFaritails';
import UFriction from './components/Pages/UFiriction';
import ULiterature from './components/Pages/ULitrature';
import UMystery from './components/Pages/UMystery';
import UHorror from './components/Pages/UHorror';
import CardDetails from './components/CardDetails';
import CartPage from './components/CartPage';
import CashOnDelivery from './components/CashOnDelivery';
import CheckoutForm from './components/CheckoutForm';
import PayPage from './components/PayPage';

const Stack = createStackNavigator();

const App = () => {
  const [cartItems =[], setCartItems] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setNotificationCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    if (notificationCount > 0) {
      setNotificationCount(notificationCount - 1);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen 
          name="CashOnDelivery" 
          children={() => <CashOnDelivery removeFromCart={removeFromCart} />} 
        />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="Checkout" component={CheckoutForm} initialParams={{ selectedItems: [] }} />
        <Stack.Screen 
        name="Cart" 
        children={() => <CartPage cartItems={cartItems} setCartItems={setCartItems} />} 
        />

        <Stack.Screen 
          name="Pay" 
          children={() => <PayPage cartItems={cartItems} removeFromCart={removeFromCart} />} 
        />
        <Stack.Screen 
          name="Story" 
          children={() => (
            <Story cartItems={cartItems} notificationCount={notificationCount} addToCart={addToCart} />
          )}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="CrimeAndThrills" 
          children={() => <CrimeAndThrills addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="Fairytales" 
          children={() => <Fairytails addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="Friction" 
          children={() => <Friction addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="Literature" 
          children={() => <Literature addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="Mystery" 
          children={() => <Mystery addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="Horror" 
          children={() => <Horror addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="UCrimeAndThrills" 
          children={() => <UCrimeAndThrills addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="UFairytales" 
          children={() => <UFairytales addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="UFriction" 
          children={() => <UFriction addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="ULiterature" 
          children={() => <ULiterature addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="UMystery" 
          children={() => <UMystery addToCart={addToCart} />} 
        />
        <Stack.Screen 
          name="UHorror" 
          children={() => <UHorror addToCart={addToCart} />} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
