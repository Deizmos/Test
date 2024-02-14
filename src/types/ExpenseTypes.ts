export interface Expense {
    id: number;
    description: string;
    amount: number;
}

export interface UserExpense {
    email: string;
    expense: Expense;
}

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

interface AddExpenseAction {
    type: typeof ADD_EXPENSE;
    payload: UserExpense;
}

interface DeleteExpenseAction {
    type: typeof DELETE_EXPENSE;
    payload: {
        id: number;
    };
}

export type ExpenseActionTypes = AddExpenseAction | DeleteExpenseAction;
