import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import IndexScreen from '../screens/indexScreen';
import ShowScreen from '../screens/ShowScreen';
import LinkingConfigure from './LinkingConfiguration';
import CreateScreen from '../screens/CreateScreen';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
const Stack = createStackNavigator();
const RootNavigator = () => {
  const { state }: any = useContext(Context);
  return (
    <NavigationContainer linking={LinkingConfigure}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='home'
          component={IndexScreen}
          options={({ navigation }) => ({
            title: 'Blogs',
            headerRight: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: 20 }}
                onPress={() => navigation.navigate('create')}
              >
                <Feather name={'plus'} size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name='show'
          component={ShowScreen}
          options={({ route }) => {
            return {
              title: `Details of ${
                state.find((p: { id: string }) => p.id === route.params?.id)
                  .title
              }`,
            };
          }}
        />
        <Stack.Screen
          name='create'
          component={CreateScreen}
          options={{ title: 'Create Blog' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
