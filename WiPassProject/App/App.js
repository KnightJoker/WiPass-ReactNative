/**
 * Created by huni on 14/03/2017.
 */

import React, { Component } from 'react';
import LoginScreen from './Containers/LoginScreen'
import HomeScreen from './Containers/HomeScreen'
import Images from './Themes/Images'
import {
    AppRegistry,
    Text,
    StyleSheet,
    View,
    Button,
    Image,
    TouchableHighlight,
    Alert

} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';



// class App extends Component {
//     render() {
//         return (
//
//             <LoginScreen></LoginScreen>
//             // <HomeScreen></HomeScreen>
//
//         );
//     }
// }

const App = StackNavigator({
    Login: {
        screen: LoginScreen,

        navigationOptions: {
            headerStyle: {
                backgroundColor: '#29292b',
                elevation: null
            },
        },
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#29292b',
                elevation: null,
            },
            headerLeft: (
                <Button title="" />
            ),
            headerRight: (
                // <Image source={Images.add} style={[{marginRight:20}]}></Image>
                <TouchableHighlight onPress={()=>{Alert.alert('Button has been pressed!');}} >
                    <Image source={Images.add} style={[{marginRight:20}]}></Image>
                </TouchableHighlight>

    ),
            title: '密码管理',
            headerTintColor: '#dcdcdc',

        },
    },
});


export default App