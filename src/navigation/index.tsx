import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IndexScreen from '../screens/indexScreen';

const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={IndexScreen}
          options={{ title: "Blogs" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
