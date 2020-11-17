import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import IndexScreen from '../screens/indexScreen';
import ShowScreen from "../screens/ShowScreen";

const Stack = createStackNavigator();
const RootNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="home"
          component={IndexScreen}
          options={{ title: "Blogs" }}
        />
        <Stack.Screen
          name="show"
          component={ShowScreen}
          options={{ title: "Show details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
