import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const {blogPosts,addBlogPosts} = useContext(BlogContext);
    return (
    <View >
        <Button title={"Add post"} onPress={addBlogPosts}/>
      <FlatList data={blogPosts} keyExtractor={post=> post.title} renderItem={({item}) =>{
          return <Text>{item.title}</Text>
      }}/>
    </View>
  );
};


const styles = StyleSheet.create({});

export default IndexScreen;
