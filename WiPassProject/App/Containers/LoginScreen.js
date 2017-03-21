/**
 * Created by huni on 21/03/2017.
 */

import React, { Component } from 'react';
import images from  '../Themes/Images'
import styles from './Styles/LoginScreenStyle'
import {
    AppRegistry,
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';

class LoginScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Image source={images.logo} style={styles.eLogo}></Image>
                <Text style={styles.welcome}>Welcome to WiPass~</Text>
            </View>

        );
    }
}

export default LoginScreen
