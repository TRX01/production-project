import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('get Counter value selector testing', () => {
    test('should return Counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    });
});
