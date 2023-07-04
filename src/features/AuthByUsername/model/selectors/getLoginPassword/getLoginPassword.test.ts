import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword test', () => {
    test('should return true', () => {
        const State: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        }
        expect(getLoginPassword(State as StateSchema)).toBe('123');
    });

    test('empty state', () => {
        const State: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(State as StateSchema)).toBe(undefined);
    });
});
