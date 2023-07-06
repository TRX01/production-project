import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type actionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, RejectedValue>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: actionCreatorType<Return, Arg, RejectedValue>

    constructor(actionCreator: actionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        // @ts-ignore
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}
