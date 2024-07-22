import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Pressable onPress={()=>{navigation.navigate("Test")}}><Text>test.js</Text></Pressable> */}
      <Text>Profile </Text>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container : {
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})