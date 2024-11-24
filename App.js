// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import CardDetails from './components/CardDetails';
// import CashOnDelivery from './components/CashOnDelivery';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="CardDetails">
//         <Stack.Screen 
//           name="CardDetails" 
//           component={CardDetails} 
//           options={{ title: 'Card Payment' }} 
//         />
//         <Stack.Screen 
//           name="CashOnDelivery" 
//           component={CashOnDelivery} 
//           options={{ title: 'Cash On Delivery' }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardDetails from './components/CardDetails';
import CashOnDelivery from './components/CashOnDelivery';
import CartPage from './components/CartPage';
import CheckoutForm from './components/CheckoutForm';
import PayPage from './components/PayPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cart">
        {/* Cart Page */}
        <Stack.Screen 
          name="Cart" 
          component={CartPage} 
          options={{ title: 'Your Cart' }} 
        />

        {/* Checkout Page */}
        <Stack.Screen 
          name="Checkout" 
          component={CheckoutForm} 
          options={{ title: 'Checkout' }} 
        />

        {/* Payment Page */}
        <Stack.Screen 
          name="Pay" 
          component={PayPage} 
          options={{ title: 'Payment' }} 
        />

        {/* Card Details Payment Page */}
        <Stack.Screen 
          name="CardDetails" 
          component={CardDetails} 
          options={{ title: 'Card Payment' }} 
        />

        {/* Cash On Delivery Page */}
        <Stack.Screen 
          name="CashOnDelivery" 
          component={CashOnDelivery} 
          options={{ title: 'Cash On Delivery' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
