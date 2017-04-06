/**
 * Created by huni on 21/03/2017.
 */

import React, {Component} from 'react';
import HomeScreen from './HomeScreen'
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
import ReactNative from 'react-native';
import { StackNavigator } from 'react-navigation';

const onButtonPress = () => {
    // Alert.alert('Button has been pressed!');
    navigate('Home',{user:'Lucy'});
};


class LoginScreen extends Component {


    render() {
        return (

            <ScrollView scrollEnabled={false} ref="scrollView" style={styles.container}
                        contentContainerStyle={{alignItems: 'center'}}>
                <View style={styles.container1}>

                    <StatusBar barStyle={'light-content'}></StatusBar>

                    <Image source={images.logo} style={styles.eLogo}></Image>
                    <Text style={styles.welcome}>WiPass</Text>

                    <View style={styles.textView}>
                        <Image source={images.user} style={styles.icon}></Image>

                        <TextInput ref="textInput" style={styles.textField} placeholder={'User'}
                                   placeholderTextColor={'#8c8c8c'} onBlur={this._reset.bind(this)}
                                   onFocus={this._onFocus.bind(this, 'textInput')}>
                        </TextInput>
                    </View>
                    <View style={styles.lineView}></View>

                    <View style={styles.textView}>
                        <Image source={images.password} style={styles.icon}></Image>
                        <TextInput ref="textInput" style={styles.textField} placeholder={'Password'}
                                   placeholderTextColor={'#8c8c8c'} onBlur={this._reset.bind(this)}
                                   onFocus={this._onFocus.bind(this, 'textInput')}
                                   secureTextEntry={true}></TextInput>
                    </View>
                    <View style={styles.lineView}></View>


                    <TouchableHighlight style={styles.button} onPress={onButtonPress} underlayColor={'#29292b'}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableHighlight>


                </View>
            </ScrollView>
        );
    }

    _reset() {

        this.refs.scrollView.scrollTo({y: 0});

    }

    _onFocus(refName) {

        setTimeout(() => {

            let scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollNativeHandleToKeyboard(ReactNative.findNodeHandle(this.refs[refName]), 0, true);
        }, 100);
    }

}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Login:{screen:LoginScreen},

});

export default LoginScreen
