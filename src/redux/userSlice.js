import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    isAuth: false,
    session : [],
    token : null,
    refreshToken : null
}



export const getLogin = createAsyncThunk("getLogin", async (loginServices, { getState, rejectWithValue }) => {
 
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
            state.username = '';
            state.password = ''
        },
        setToken: (state,action) =>{
            state.session.accessToken =action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLogin.fulfilled, (state, action) => {

                if(action.payload.statusCode === 200){
                    state.session = action.payload.result
                    state.isAuth = true
                }
                else{
                     alert('userslice line 69 message : ' + action.payload.message)
                }
                state.isLoading = false
            })
            .addCase(getLogin.pending, (state, action) => {
                state.isLoading = true

            })
            .addCase(getLogin.rejected, (state, action) => {
                // işlem hatalı olursa yapılacak işlemler
                state.isLoading = false
                alert('userslice line 69 message : ' + action.payload.message)
            });
    },
})

export const { setUsername, setPassword, setIsloading,  setLogout,setToken } = userSlice.actions
export default userSlice.reducer 