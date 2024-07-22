import { Pressable, StyleSheet, View, Text, } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from '../../redux/userSlice';
import loginServices from '../../services/main/loginServices';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconQrcode, IconScan } from '@tabler/icons-react-native';

const HomePage = ({ navigation }) => {

    const dispatch = useDispatch();

    const session = useSelector((state) => state.user.session)

    useEffect(() => {
        if (session) {

            loginServices.faqinfo(dispatch, session)
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log('home line 20 : ' + err)
                })
        }

    }, [session]);


    return (

        <SafeAreaView style={styles.container}>
            <Text style={{ marginBottom: 30, fontWeight: 'bold' }}>Hoşgeldin {session?.user?.name} {session?.user?.surname}</Text>

            <Pressable style={({ pressed }) => [{
                backgroundColor: pressed ? 'rgba(0, 191, 221, 0.10)' : 'transparent'
            }, styles.buttons]} onPress={() => navigation.navigate("ReadQr")}>

                <View style={styles.iconTop}>
                    <IconQrcode style={styles.icons} size={48} />
                </View>
                <Text style={{ color: '#0ea5e9', marginTop: 10 }}>
                    Yeni Kabul
                </Text>

            </Pressable>

            <Pressable style={({ pressed }) => [{
                backgroundColor: pressed ? 'rgba(0, 191, 221, 0.10)' : 'transparent'
            }, styles.buttons]} >
                <View style={styles.iconTop}>
                    <IconScan style={styles.icons} size={48} />
                </View>
                <Text style={{ color: '#0ea5e9', marginTop: 10 }}>
                    Ürün Girişi İle Mal Kabul
                </Text>

            </Pressable>


            <Pressable onPress={() => dispatch(setLogout(false))} style={{ marginTop: 30 }}>
                <Text>
                    Çıkış Yap
                </Text>
            </Pressable>


        </SafeAreaView >
    )
}

export default HomePage

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',

    },
    buttons: {
        width: '90%',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: '#0ea5e9',
        padding: 30,
        marginTop: 30
    },
    icons: {

        color: '#0ea5e9',

        padding: 10,
        margin: 'auto'
    },
    iconTop: {
        backgroundColor: 'rgba(0, 191, 221, 0.10)',
        width: 75,
        height: 75,
        borderRadius: 120,
    }
})