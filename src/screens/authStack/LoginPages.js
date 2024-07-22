import React, { useState } from 'react'
import { Alert,  Image, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { setUsername,setPassword,getLogin,setLogout,setIsloading } from '../../redux/userSlice';
import loginServices from '../../services/main/loginServices';
import { SafeAreaView } from 'react-native-safe-area-context';

const logo = require("../../../assets/images/a101logo.png")



export default function LoginForm({navigation}) {
  const dispatch = useDispatch();
  const {username,password} = useSelector((state)=>state.user)
  const [click, setClick] = useState(false);

  const goSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source={logo} style={styles.image} resizeMode='contain' />
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='Kullanıcı Adı' value={username} onChangeText={(value)=>dispatch(setUsername(value))} autoCorrect={false}
          autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='Şifre' secureTextEntry value={password} onChangeText={(value)=>dispatch(setPassword(value))} autoCorrect={false}
          autoCapitalize='none' />
      </View>


      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch value={click} onValueChange={setClick} trackColor={{ true: "green", false: "gray" }} />
          <Text style={styles.rememberText}>Beni Hatırla</Text>
        </View>

        <View>
          <Pressable onPress={() => Alert.alert("Şifremi unuttum ...")}>
            <Text style={styles.forgetText}>Şifremi Unuttum ?</Text>
          </Pressable>
        </View>
  
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={() => dispatch(getLogin(loginServices))}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </Pressable>
      </View>

      <Text style={styles.footerText}>Hesabın Yok Mu?<Text style={styles.signup} onPress={goSignUp}> Kayıt Ol</Text></Text>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 160,
    width: 170

  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
   /*  textTransform: "uppercase", */
    textAlign: "center",
    paddingVertical: 20,
    color: "#01B3B7"
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#01B3B7",
    borderBottomWidth: .8,
    borderRadius: 7
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  rememberText: {
    fontSize: 13
  },
  forgetText: {
    fontSize: 11,
    color: "#01B3B7"
  },
  button: {
    backgroundColor: "#01B3B7",
    height: 45,
    
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
    marginVertical:30
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "#01B3B7",
    fontSize: 13
  }
})