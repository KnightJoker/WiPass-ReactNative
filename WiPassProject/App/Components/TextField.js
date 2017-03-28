/**
 * Created by huni on 28/03/2017.
 */


import React, { Component } from 'react';
import styles from './Styles/TextFieldStyle'
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

class TextField extends Component {
    render() {
        return (

                <View style={styles.textView}>
                    <Image source={images.user} style={styles.icon}></Image>
                    <TextInput style={styles.textField} placeholder={'User'} placeholderTextColor={'#8c8c8c'}></TextInput>
                    <View style={styles.lineView}></View>
                </View>

        );
    }
}

export default TextField