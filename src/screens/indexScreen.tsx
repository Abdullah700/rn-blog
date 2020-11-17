import React, {ContextType, useContext} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {Context, IBLog, IContext} from "../context/BlogContext";

const IndexScreen = () => {
    const {state,addBlogPosts} = useContext<any>(Context);
    const a = useContext<any>(Context);
    console.log(a)
    return (
    <View >
        <Button title={"Add post"} onPress={addBlogPosts}/>
      <FlatList data={state} keyExtractor={post=> post.title} renderItem={({item}) =>{
          return <Text>{item.title}</Text>
      }}/>
    </View>
  );
};


const styles = StyleSheet.create({});

export default IndexScreen;
