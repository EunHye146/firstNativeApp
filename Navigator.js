// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/pages/Main';
import Acc from './components/pages/Acc';
import Bottom from './components/pages/Bottom';
import Dress from './components/pages/Dress';
import Outer from './components/pages/Outer';
import Shoes from './components/pages/Shoes';
import Top from './components/pages/Top';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Acc" component={Acc}/>
        <Stack.Screen name="Bottom" component={Bottom} />
        <Stack.Screen name="Dress" component={Dress} />
        <Stack.Screen name="Outer" component={Outer} />
        <Stack.Screen name="Shoes" component={Shoes} />
        <Stack.Screen name="Top" component={Top} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;