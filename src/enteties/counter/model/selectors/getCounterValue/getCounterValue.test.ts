import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('get counter value selector testing', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    });
});
