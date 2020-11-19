import React, { useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useRoute} from '@react-navigation/native';
import { Context } from '../context/BlogContext';

const ShowScreen = () => {
    const {params} = useRoute()
    const {state}: any = useContext(Context)
    const {id} = params as { id: string }

    const blogPost = state.find((p: { id: string; })=> p.id === id)
    console.log(blogPost)
    return (
        <View style={styles.container}>
            <Text>
                -------{blogPost.title}-------
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({container: {},});

export default ShowScreen;
