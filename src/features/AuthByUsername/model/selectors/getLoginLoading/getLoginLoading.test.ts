import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading test', () => {
    test('should return true', () => {
        const State: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        }
        expect(getLoginLoading(State as StateSchema)).toBe(true);
    });

    test('empty state', () => {
        const State: DeepPartial<StateSchema> = {}
        expect(getLoginLoading(State as StateSchema)).toBe(undefined);
    });
});
