
import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPages,SignUp } from "../screens";


const Stack = createNativeStackNavigator();

const authStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="LoginPages">
            <Stack.Screen options={{ title: 'Giriş Yap ' }} name="LoginPages" component={LoginPages} />
            <Stack.Screen options={{ title: 'Kayit Ol ' }} name="SignUp" component={SignUp} />

        </Stack.Navigator>

        
    )
}

export default authStack