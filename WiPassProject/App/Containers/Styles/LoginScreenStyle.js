/**
 * Created by huni on 21/03/2017.
 */

import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#29292b',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 70,
        color: '#dcdcdc',
        marginBottom: 100,
    },
    eLogo: {
        marginTop: 20,
        marginBottom: 44,
        top: 100,
    },
    textView: {
        flexDirection: 'row',
        width:'100%',
        height:40,
        backgroundColor:'#29292b',
    },
    textField: {
        height: 30,
        width:'70%',
        marginLeft:20,
        marginTop:8,
       color: '#dcdcdc',

    },
    icon : {
        height: 22,
        width: 18,
        marginLeft:30,
        marginTop:10,
    },
    lineView: {
        height: 0.5,
        backgroundColor:'#dcdcdc',
        // width:'82%',
        // marginLeft:100,
        paddingLeft:320,
        // marginRight:30,
    },
    //
    button: {

        marginTop:30,
        backgroundColor:'#2CBF67',
        height:40,
        width:'84%',
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#dcdcdc',
        // height:30,
        // alignItems: 'center',
        fontSize:20,
    },

});