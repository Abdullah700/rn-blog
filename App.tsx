import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './src/navigation';

const App = () => {
  return (
    <>
      <RootNavigator />
      <StatusBar />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
