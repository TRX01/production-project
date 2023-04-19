import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'enteties/Counter/model/slice/counterSlice';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { StateSchema } from './StateSchema';

export default function createReduxStore(initialState: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
