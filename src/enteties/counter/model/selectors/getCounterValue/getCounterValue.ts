import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'enteties/counter/model/selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
)
