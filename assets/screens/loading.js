/* eslint-disable prettier/prettier */
import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';
 const Progress = ()=>{
    return(
        <View style={styles.grandContainer}>
        <View style={styles.container}>
        <Text style={styles.text}>Fetching data from API...</Text>
        <Image style={styles.logo} source={require('../AdditionLogo/loading.png')}/>
        </View>
        </View>
    );
};
export default Progress;

const styles =StyleSheet.create(
    {
        container:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'center',
            alignItems: 'center',
        },
        logo: {
            width: 130,
            height: 130,
        },
        text: {
            color: 'black',
            fontWeight: '900',
            fontSize: 17,
            fontFamily: 'monospace',
        },
        grandContainer:{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    }
);
