import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import RootNavigator from './src/navigation';
import {Provider as BlogProvider} from "./src/context/BlogContext";

const App = () => {
  return (
    <BlogProvider>
      <RootNavigator />
      <StatusBar />
    </BlogProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
