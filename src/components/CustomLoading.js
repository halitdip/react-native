// Loading.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native';
const logo = require("../../assets/images/a101logo.png")
import { useDispatch } from 'react-redux';
import { setIsloading } from '../redux/userSlice';
const Loading = () => {
    /* const dispatch = useDispatch();
    dispatch(setIsloading(false)) */
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={{ marginBottom: 30, color: '#000' }}>Lütfen Bekleyiniz...</Text>

            <ActivityIndicator size="large" color="#000" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(209, 220, 232,.3)', 
        

    },
    image: {
        height: 160,
        width: 170,

    }
});

export default Loading;