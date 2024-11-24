import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardDetails from './components/CardDetails';
import CashOnDelivery from './components/CashOnDelivery';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardDetails">
        <Stack.Screen 
          name="CardDetails" 
          component={CardDetails} 
          options={{ title: 'Card Payment' }} 
        />
        <Stack.Screen 
          name="CashOnDelivery" 
          component={CashOnDelivery} 
          options={{ title: 'Cash On Delivery' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
