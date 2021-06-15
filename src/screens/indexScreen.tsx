import React, { useContext } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { Context } from '../context/BlogContext';

import { Feather } from '@expo/vector-icons';
import { IContext } from '../interfaces';

const IndexScreen = () => {
  const { state, addBlogPosts, deleteBlogPosts } =
    useContext<IContext>(Context);
  const { navigate } = useNavigation();
  return (
    <View>
      <Button title={'Add post'} onPress={addBlogPosts} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigate('show', { id: item.id })}
              >
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                <Feather style={styles.icon} name={'trash'} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
