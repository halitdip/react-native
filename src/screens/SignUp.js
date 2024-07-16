import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { CustomTextInput, CustomButton } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context';
const signuplogo = require("../../assets/images/signuplogo.png")




const SignUp = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlebutton = () => {
        alert(username + ' ' + password + ' ' + email)
    }

    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.titleContainer}>
                <Image source={signuplogo} style={styles.image} resizeMode='contain' />

                <Text style={styles.signup}>Kayit ol</Text>
            </View>


            <View style={styles.textInputContainer}>
                <CustomTextInput placeholder="Kullanıcı Adı" autoCorrect={false} onChangeText={setUsername} value={username} isSecureText={false} />
                <CustomTextInput placeholder="E-Mail Adresi" autoCorrect={false} onChangeText={setEmail} value={email} isSecureText={false} />
                <CustomTextInput placeholder="Şifre" autoCorrect={false} onChangeText={setPassword} value={password} isSecureText={true} />
            </View>


            <View style={styles.signupContainer}>
                <CustomButton buttonText="Kayıt Ol " setWidth='80%' buttonColor="gray" pressedButtonColor="lightgray" handleOnPress={handlebutton} />

                <Pressable onPress={()=>navigation.navigate("LoginPages")}>
                    <Text style={{fontWeight : 'bold', marginBottom : 20}}>Hesabın Var Mı? Giriş Yap</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    signup: {
        fontWeight: 'bold',
        fontSize: 20
    },

    titleContainer: {
        flex: 2,
        width : '100%',
        alignItems:'center',
        justifyContent : 'center',
    },
    textInputContainer: {
        width: '90%',
        alignItems: 'center',
        flex: 3,
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    signupContainer: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent : 'space-between',
      
    },
    image: {
        height: 50,
        width: 50,

    },
})