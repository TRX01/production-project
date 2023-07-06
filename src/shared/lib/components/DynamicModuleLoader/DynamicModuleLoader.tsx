import { FC, Reducer, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type reducersList = {
    [reducerName in StateSchemaKey]?: Reducer<any, any>;
}

type reducerListEntry = [StateSchemaKey, Reducer<any, any>]

interface DynamicModuleLoaderProps {
    // reducerName: StateSchemaKey,
    // reducer: Reducer<any, any>,
    reducers: reducersList;
    removeAfterUnmount?: boolean,
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = false,
    } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: reducerListEntry) => {
            store.reducerManager.add(reducerName, reducer)
            dispatch({ type: `@INIT ${reducerName} REDUCER` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName, reducer]: reducerListEntry) => {
                    store.reducerManager.add(reducerName, reducer)
                    dispatch({ type: `@DESTROY ${reducerName} REDUCER` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {children}
        </div>
    );
};
