import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError test', () => {
    test('should return error', () => {
        const State: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        }
        expect(getLoginError(State as StateSchema)).toBe('error');
    });

    test('empty state', () => {
        const State: DeepPartial<StateSchema> = {}
        expect(getLoginError(State as StateSchema)).toBe(undefined);
    });
});
