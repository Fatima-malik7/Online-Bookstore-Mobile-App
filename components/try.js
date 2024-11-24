import React from 'react';
import { Text, View } from 'react-native';

const TryComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
        Hello from TryComponent!
      </Text>
    </View>
  );
};

export default TryComponent;
