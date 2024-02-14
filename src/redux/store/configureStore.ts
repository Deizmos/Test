import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import expensesReducer from '../reducers/expensesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    expenses: expensesReducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;
