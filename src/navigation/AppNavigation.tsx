import React from 'react';

import { Platform } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainScreen from 'screens/MainScreen';
import PostScreen from 'screens/PostScreen';
import AboutScreen from 'screens/AboutScreen';
import BookmarkedScreen from 'screens/BookmarkedScreen';

import { THEME } from '@theme';

import { Ionicons } from '@expo/vector-icons';
import CreateScreen from 'screens/CreateScreen';

const navigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#ffffff',
  },
  headerTintColor: Platform.OS === 'android' ? '#ffffff' : THEME.MAIN_COLOR,
};

const Stack = createStackNavigator();

export const PostNavigation = () => (
  <Stack.Navigator screenOptions={navigatorOptions} initialRouteName={'Main'}>
    <Stack.Screen name={'Main'} component={MainScreen} />
    <Stack.Screen
      name={'Post'}
      component={PostScreen}
      // options={props => {
      //   const { date, postId } = props.route.params;
      //   return {
      //     title: `Post ${postId} by ${new Date(date).toLocaleDateString()} `,
      //   };
      // }}
    />

    {/* <Stack.Screen name={'Post'}>
        {props => {
          console.log(props);
          return <PostScreen {...props}  />;
        }}
      </Stack.Screen> */}

    <Stack.Screen name={'About'} component={AboutScreen} />
  </Stack.Navigator>
);

const BookedStack = createStackNavigator();

const BookedStackScreen = () => {
  return (
    <BookedStack.Navigator screenOptions={navigatorOptions} initialRouteName={'Booked'}>
      <BookedStack.Screen name={'Booked'} component={BookmarkedScreen} />
      <BookedStack.Screen name={'Post'} component={PostScreen} />
    </BookedStack.Navigator>
  );
};

const BottomNavigator =
  Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
// const BottomNavigator = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomNavigator.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Post') {
      //       iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
      //     } else if (route.name === 'Booked') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
      }}
      shifting
      barStyle={{ backgroundColor: THEME.MAIN_COLOR }}>
      <BottomNavigator.Screen
        options={{
          tabBarIcon: ({ color }: any) => <Ionicons name={'ios-albums'} size={25} color={color} />,
          tabBarLabel: 'All',
        }}
        name={'Post'}
        component={PostNavigation}
      />
      <BottomNavigator.Screen
        options={{
          tabBarIcon: ({ color }: any) => <Ionicons name={'ios-star'} size={25} color={color} />,
        }}
        name={'Booked'}
        component={BookedStackScreen}
      />
    </BottomNavigator.Navigator>
  );
};

const AboutStack = createStackNavigator();

const AboutNavigation = () => {
  return (
    <AboutStack.Navigator screenOptions={navigatorOptions}>
      <AboutStack.Screen name={'About'} component={AboutScreen} />
    </AboutStack.Navigator>
  );
};

const CreateStack = createStackNavigator();

const CreateNavigation = () => {
  return (
    <CreateStack.Navigator screenOptions={navigatorOptions}>
      <CreateStack.Screen name={'Create'} component={CreateScreen} />
    </CreateStack.Navigator>
  );
};

const MainNavigator = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <MainNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {
          fontSize: 15,
        },
      }}>
      <MainNavigator.Screen
        options={{ title: 'Posts' /* , drawerIcon: () => <Ionicons name={'ios-star'} /> */ }}
        name={'PostTabs'}
        component={BottomNavigation}
      />
      <MainNavigator.Screen
        name={'AboutNavigation'}
        options={{ title: 'About' }}
        component={AboutNavigation}
      />
      <MainNavigator.Screen
        name={'CreateNavigation'}
        options={{ title: 'Create Post' }}
        component={CreateNavigation}
      />
    </MainNavigator.Navigator>
  );
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
