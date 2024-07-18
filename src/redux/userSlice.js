import { createSlice } from "@reduxjs/toolkit";
import loginServices from '../services/main/loginServices';

const initialState = {
    username: 'halitdip',
    password: '12345',
    isLoading: false,
    isAuth: false,
    users: {
        ka: 'halitdip',
        pass: '12345'
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsloading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsAuth: (state) => {

            const model =
            {
                "userName": state.username,
                "password": state.password
            }

            loginServices.login(model)
                .then(res => {
                    console.log(res)
                }).catch(err=>{
                    console.log('err line 40 userslice',err)
                })


            state.isLoading = true;

            if (state.users.ka == state.username && state.password)
                state.isAuth = true;
            else {
                alert("Kullanıcı Bulunamadı !")
            }

            state.isLoading = false


        },
        setLogout: (state) => {
            /*  state.username = null;
             state.password = null;  */
            state.isAuth = false;
        }
    }
})

export const { setUsername, setPassword, setIsloading, setIsAuth, setLogout } = userSlice.actions
export default userSlice.reducer 