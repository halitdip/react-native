import { StyleSheet, TextInput , View} from 'react-native'
import React from 'react'



const CustomTextInput = ({ placeholder, autoCorrect, value, onChangeText,isSecureText }) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.input} placeholder={placeholder} autoCorrect={autoCorrect} value={value} onChangeText={onChangeText} 
                secureTextEntry={isSecureText}
                autoCapitalize='none' />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputView: {
       /*  gap: 15, */
        width: "100%",
       /*  paddingHorizontal: 40, */
        marginBottom: 5,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#01B3B7",
        borderBottomWidth: .8,
        borderRadius: 7,
        width:'100%',
    },
})