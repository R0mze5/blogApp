import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from 'screens/MainScreen';
import PostScreen from 'screens/PostScreen';
import AboutScreen from 'screens/AboutScreen';

const Stack = createStackNavigator();

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'Main Screen'}>
      <Stack.Screen name={'Main'} component={MainScreen} />
      <Stack.Screen name={'Post'} component={PostScreen} />
      <Stack.Screen name={'About'} component={AboutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
