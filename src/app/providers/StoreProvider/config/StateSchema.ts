import { CounterSchema } from 'enteties/Counter/model/types/counterSchema';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername/model/types/login';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
