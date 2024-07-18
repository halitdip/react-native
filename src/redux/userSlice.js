import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginServices from '../services/main/loginServices';

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    isAuth: false,
    session : [],
    token : null,
    refreshToken : null
}



export const getLogin = createAsyncThunk("getLogin", async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const username = state.user.username;
    const passw = state.user.password;

    const model = {
        "userName": username,
        "password": passw
    };

    try {
        const resp = await loginServices.login(model);
        return resp.data; 
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response);
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload ;
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsloading: (state, action) => {
            state.isLoading = action.payload
        },
        setLogout: (state) => {
            state.session = []
            state.token = null
            state.refreshToken = null
            state.isAuth = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLogin.fulfilled, (state, action) => {

                console.log(action.payload)
                if(action.payload.statusCode === 200){
                    state.session = action.payload.result
                    state.token = action.payload.result.accessToken
                    state.refreshToken = action.payload.result.refreshToken
                    state.isAuth = true
                    
                    
                }
                else{
                     alert('userslice line 69 err: ',action.payload.message)
                }
                state.isLoading = false
            })
            .addCase(getLogin.pending, (state, action) => {
                state.isLoading = true

            })
            .addCase(getLogin.rejected, (state, action) => {
                // işlem hatalı olursa yapılacak işlemler
                state.isLoading = false
                console.log(action)
            });
    },
})

export const { setUsername, setPassword, setIsloading,  setLogout } = userSlice.actions
export default userSlice.reducer 