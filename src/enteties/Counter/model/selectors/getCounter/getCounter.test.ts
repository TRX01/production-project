import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';

describe('get Counter selector testing', () => {
    test('should return Counter object', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    });
});
