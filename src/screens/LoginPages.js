import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


/* rnfes */
const LoginPages = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginPages</Text>

      <Pressable onPress={()=>navigation.navigate('HomePage')}>
        <Text>Go</Text>
      </Pressable>
    </View>
  )
}

export default LoginPages

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center',
        justifyContent:'center'
    }

})
