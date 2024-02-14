export interface Expense {
    id: number;
    description: string;
    amount: number;
    date: string;
    userId: string;
}

export interface ExpensesListProps {
    expenses: Expense[];
    onAddExpense: (newExpense: Expense) => void;
    onDeleteExpense: (id: number) => void;
}

export interface ExpensesFilters {
    expenses: Expense[];
    onFilterChange: (filteredExpenses: Expense[]) => void;
    displayedExpenses:  Expense[];
}

export interface ExpenseFormProps {
    onAddExpense: (newExpense: Expense) => void;
    expenses: Expense[];
}

export interface InputProps {
    className?:string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}
