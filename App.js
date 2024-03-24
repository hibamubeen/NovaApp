import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/screens/LandingPage';
import LoginScreen from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}