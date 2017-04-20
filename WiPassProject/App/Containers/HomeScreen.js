/**
 * Created by huni on 06/04/2017.
 */

import React, {Component} from 'react';
import images from  '../Themes/Images'
import styles from './Styles/HomeScreenStyle'
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


class HomeScreen extends Component {



    render() {
        return (

            <ScrollView scrollEnabled={true} ref="scrollView" style={styles.container}
                        contentContainerStyle={{alignItems: 'center'}}>
                <View style={styles.container1}>

                    <StatusBar barStyle={'light-content'}></StatusBar>




                </View>
            </ScrollView>
        );
    }



}



export default HomeScreen