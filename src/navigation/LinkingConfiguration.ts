// @ts-ignore
import * as Linking from 'expo-linking';
import {LinkingOptions} from "@react-navigation/native";


let newVar: LinkingOptions = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            home: '/',
            show:'/show/:id'
        },
        initialRouteName:'home'
    }
}
export default newVar;
