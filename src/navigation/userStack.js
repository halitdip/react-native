
import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from "../screens";


const Stack = createNativeStackNavigator();

const authStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen options={{ title: 'Hoşgeldiniz !' }} name="HomePage" component={HomePage} />
        </Stack.Navigator>
    )
}

export default authStack