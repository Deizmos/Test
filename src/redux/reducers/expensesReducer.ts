import { ADD_EXPENSE, DELETE_EXPENSE, ExpenseActionTypes, UserExpense } from "../../types/ExpenseTypes";

const initialState: UserExpense[] = [];

const expensesReducer = (state = initialState, action: ExpenseActionTypes): UserExpense[] => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [...state, action.payload];
        case DELETE_EXPENSE:
            return state.filter((userExpense) => userExpense.expense.id !== action.payload.id);
        default:
            return state;
    }
};

export default expensesReducer;
