import axios from 'axios';
import { User, userActions } from 'enteties/User';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })
    
    test('success login', async () => {
        const userValue: User = { username: 'admin', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
        // const action = loginByUsername({ username: 'admin', password: '123' })
        // const result = await action(dispatch, getState, undefined)

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(dispatch).toBeCalledTimes(3)
    });

    test('unsuccess login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(dispatch).toBeCalledTimes(2)
    });
});
