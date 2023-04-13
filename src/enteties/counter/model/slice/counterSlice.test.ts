import { CounterSchema } from 'enteties/counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counter slice testing', () => {
    test('empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment),
        ).toEqual({ value: 1 })
    });

    test('increment', () => {
        const state: CounterSchema = { value: 10 }

        expect(
            counterReducer(state, counterActions.increment),
        ).toEqual({ value: 11 })
    });

    test('decrement', () => {
        const state: CounterSchema = { value: 10 }

        expect(
            counterReducer(state, counterActions.decrement),
        ).toEqual({ value: 9 })
    });
});
