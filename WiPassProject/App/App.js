/**
 * Created by huni on 14/03/2017.
 */

import React, { Component } from 'react';
import LoginScreen from './Containers/LoginScreen'
import HomeScreen from './Containers/HomeScreen'
import {
    AppRegistry,
    Text,
    StyleSheet,
    View
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
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
});

export default App