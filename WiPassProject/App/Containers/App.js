/**
 * Created by huni on 14/03/2017.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    View
} from 'react-native';

class App extends Component {
    render() {
        return (

        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to WiPass~</Text>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default App