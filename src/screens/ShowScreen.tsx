import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Context } from '../context/BlogContext';
import { IBLog } from '../interfaces';

const ShowScreen = () => {
  const { params } = useRoute();
  const { state } = useContext(Context);
  console.log(state);

  const { id } = params as { id: string };

  const blogPost = state?.find((p) => p.id === id);
  return (
    <View style={styles.container}>
      <Text>-------{blogPost?.title}-------</Text>
      <Text>{blogPost?.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ container: {} });

export default ShowScreen;
