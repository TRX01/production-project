import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'enteties/Profile/model/services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setFirstname: (state: ProfileSchema, action: PayloadAction<string>) => {
            state.data.firstname = action.payload
        },
        setLastname: (state: ProfileSchema, action: PayloadAction<string>) => {
            state.data.lastname = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
