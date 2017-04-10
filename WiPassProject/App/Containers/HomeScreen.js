/**
 * Created by huni on 06/04/2017.
 */

import React, {Component} from 'react';
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
    TouchableHighlight,
    Button,
    Alert,
    ScrollView
} from 'react-native';

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};


class HomeScreen extends Component {



    render() {
        return (

            <ScrollView scrollEnabled={false} ref="scrollView" style={styles.container}
                        contentContainerStyle={{alignItems: 'center'}}>
                <View style={styles.container1}>

                    <StatusBar barStyle={'light-content'}></StatusBar>

                    <Image source={images.logo} style={styles.eLogo}></Image>
                    <Text style={styles.welcome}>主页Home</Text>

                    <View style={styles.textView}>
                        <Image source={images.user} style={styles.icon}></Image>

                        <TextInput ref="textInput" style={styles.textField} placeholder={'User'}
                                   placeholderTextColor={'#8c8c8c'}>
                        </TextInput>
                    </View>
                    <View style={styles.lineView}></View>

                    <View style={styles.textView}>
                        <Image source={images.password} style={styles.icon}></Image>
                        <TextInput ref="textInput" style={styles.textField} placeholder={'Password'}
                                   placeholderTextColor={'#8c8c8c'} secureTextEntry={true}></TextInput>
                    </View>
                    <View style={styles.lineView}></View>


                    <TouchableHighlight style={styles.button} onPress={onButtonPress} underlayColor={'#29292b'}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableHighlight>


                </View>
            </ScrollView>
        );
    }



}



export default HomeScreen