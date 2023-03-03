import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

const initialState = '';

const filterReducer = createReducer(initialState, {
  [setFilter]: (_, action) => action.payload,
});

export default filterReducer;
