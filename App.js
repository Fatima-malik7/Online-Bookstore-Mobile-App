// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { SafeAreaView } from 'react-native';
import TryComponent from './components/try';  // Import the TryComponent

const App = () => {
  return (
    <SafeAreaView>
      <TryComponent />  {/* Use the TryComponent in App.js */}
    </SafeAreaView>
  );
};

export default App;
