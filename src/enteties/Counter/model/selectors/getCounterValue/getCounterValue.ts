import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'enteties/Counter/model/selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
)
