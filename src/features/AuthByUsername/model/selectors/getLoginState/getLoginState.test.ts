import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginLoading test', () => {
    test('should return login state', () => {
        const State: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
                username: 'admin',
            },
        }
        expect(getLoginState(State as StateSchema)).toStrictEqual({ isLoading: true, username: 'admin' });
    });

    test('empty state', () => {
        const State: DeepPartial<StateSchema> = {}
        expect(getLoginState(State as StateSchema)).toBe(undefined);
    });
});
