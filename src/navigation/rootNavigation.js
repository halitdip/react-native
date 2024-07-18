
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import UserStack from './userStack';
import { useSelector } from 'react-redux'
import CustomLoading from "../../src/components/CustomLoading";



const rootNavigation = () => {

    const isAuth = useSelector(state => state.user.isAuth);
    const isLoading = useSelector(state => state.user.isLoading);

    return (
        <NavigationContainer >
            {
                isLoading ? <CustomLoading/> :
                    !isAuth ? <AuthStack /> : <UserStack />
            }
        </NavigationContainer>
    )
}

export default rootNavigation