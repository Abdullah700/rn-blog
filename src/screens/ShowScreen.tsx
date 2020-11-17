import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ShowScreen = () => {
    const {key, params} = useRoute()
    const {id} = params as { id: string }
    return (
        <View style={styles.container}>
            <Text>
                -------{id}-------
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({container: {},});

export default ShowScreen;
