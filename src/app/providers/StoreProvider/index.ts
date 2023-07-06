import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { createReduxStore, AppDispatch } from 'app/providers/StoreProvider/config/store';
import type { StateSchema, ReduxStoreWithManager } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
}
