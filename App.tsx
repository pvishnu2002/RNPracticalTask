import { View } from 'react-native';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import Demo from './src/screen/Demo';

const App = () => {
  return (
    <View style={{flex:1}}>
      <HomeScreen />
      {/* <Demo /> */}
    </View>
  );
};

export default App;
