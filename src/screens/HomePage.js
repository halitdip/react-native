import { Pressable, StyleSheet, View, Text, } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode';
import { setLogout } from '../redux/userSlice';
import loginServices from '../services/main/loginServices';

const HomePage = () => {
    const session = useSelector((state) => state.user.session);
    const token = useSelector((state)=>state.user.token)


    useEffect(() => {
        loginServices.faqinfo()
        .then(res=>{
            console.log(res)
        })
        
    }, []);
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={{ marginBottom: 30, fontWeight: 'bold' }}>Hoşgeldin {session?.user?.name} {session?.user?.surname}</Text>
            <Pressable onPress={() => dispatch(setLogout(false))}>
                <Text>
                    Çıkış Yap
                </Text>
            </Pressable>


        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})