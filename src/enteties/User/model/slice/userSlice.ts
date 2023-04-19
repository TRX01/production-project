import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'enteties/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorageConst';

const initialState: UserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const userAuthData = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (userAuthData) {
                state.authData = JSON.parse(userAuthData)
            }
        },
        logout: (state) => {
            state.authData = undefined
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
