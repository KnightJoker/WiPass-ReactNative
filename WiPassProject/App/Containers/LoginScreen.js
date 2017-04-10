/**
 * Created by huni on 21/03/2017.
 */

import React, {Component} from 'react';
// import HomeScreen from './HomeScreen'
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
// import { StackNavigator } from 'react-navigation';

// const onButtonPress = () => {
//     Alert.alert('Button has been pressed!');
//     navigate('Home',{user:'Lucy'});
//     // navigate('Home', { name: 'Jane' });
// };


class LoginScreen extends Component {


    constructor() {
        super()
        this.onButtonPress = this.onButtonPress.bind(this)
    }
    // static navigationOptions = {
    //     title: 'Welcome',//设置标题内容
    // };

    render() {

        const { navigate } = this.props.navigation;
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


                    <TouchableHighlight style={styles.button} onPress={this.onButtonPress} underlayColor={'#29292b'}>
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

    onButtonPress() {
        //
        const { navigate } = this.props.navigation;
        // Alert.alert('Button has been pressed!');
        navigate('Home',{user:'Lucy'});
        // navigate('Home', { name: 'Jane' });
    };

}


export default LoginScreen
