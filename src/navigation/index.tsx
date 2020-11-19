import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import IndexScreen from '../screens/indexScreen';
import ShowScreen from "../screens/ShowScreen";
import LinkingConfigure from './LinkingConfiguration'
import CreateScreen from "../screens/CreateScreen";
import {Context} from "../context/BlogContext";
const Stack = createStackNavigator();
const RootNavigator = () => {
  const {state}: any = useContext(Context)

  return (
    <NavigationContainer linking={LinkingConfigure}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="home"
          component={IndexScreen}
          options={{ title: "Blogs" }}
        />
        <Stack.Screen
          name="show"
          component={ShowScreen}
          options={({route}) =>

               ( { title: `Details of ${state.find((p: { id: string; })=> p.id === route.params?.id).title}` })

          }
        />
        <Stack.Screen
          name="create"
          component={CreateScreen}
          options={{ title: "Create Blog" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
