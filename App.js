import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Questions from './components/question';
import Home from './components/home/';

const AppStack = createStackNavigator();

function AppStackNavigation() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home}/>
      <AppStack.Screen name="Questions" component={Questions}/>
    </AppStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStackNavigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
