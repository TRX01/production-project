import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginLoading test', () => {
    test('should return true', () => {
        const State: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        }
        expect(getLoginUsername(State as StateSchema)).toBe('admin');
    });

    test('empty state', () => {
        const State: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(State as StateSchema)).toBe(undefined);
    });
});
