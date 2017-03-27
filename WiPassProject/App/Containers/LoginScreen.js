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
    Image,
    StatusBar,
    TextInput,
} from 'react-native';

class LoginScreen extends Component {
    render() {
        return (

            <View style={styles.container}>

                <StatusBar barStyle={'light-content'}></StatusBar>
                <Image source={images.logo} style={styles.eLogo}></Image>
                <Text style={styles.welcome}>WiPass</Text>

                <View style={styles.textView}>
                    <Image source={images.user} style={styles.icon}></Image>
                    <TextInput style={styles.textField} placeholder={'用户名'}></TextInput>
                </View>

                <View style={styles.lineView}></View>

            </View>

        );
    }
}

export default LoginScreen
