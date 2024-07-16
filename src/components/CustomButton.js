import { Pressable, StyleSheet,Text } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText,setWidth,handleOnPress,buttonColor,pressedButtonColor}) => {
  return (
    <Pressable 
        onPress={()=>handleOnPress()}
        style={ ({pressed}) => [{
            backgroundColor : pressed ? pressedButtonColor : buttonColor,
            width:setWidth
        },styles.button]}
    >
        <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        height:50,
        borderRadius : 10,
        alignItems:'center',
        justifyContent :'center',
        marginTop : 20
    },
    buttonText : {
        fontWeight : 'bold',
        color : 'white'
    }

})