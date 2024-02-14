import React, { useState, useEffect } from 'react';

import {Expense, ExpensesListProps} from "../../../../../types/interfaces";
import ExpenseForm from "../Form";
import Filters from "../Filters";

import "./styles.css";

const List: React.FC<ExpensesListProps> = ({ expenses, onAddExpense, onDeleteExpense }) => {
    const [displayedExpenses, setDisplayedExpenses] = useState<Expense[]>(expenses);

    useEffect(() => {
        setDisplayedExpenses(expenses);
    }, [expenses]);


    return (
        <div>
            <Filters expenses={expenses} onFilterChange={setDisplayedExpenses} displayedExpenses={displayedExpenses}/>
            <ExpenseForm expenses={expenses} onAddExpense={onAddExpense}/>
            <div>
                {displayedExpenses.map((expense) => (
                    <div key={expense.id} className="card-container" >
                        <div className="description" >{expense.description}</div>
                        <div className="amount">{expense.amount} руб.</div>
                        <div className="date">{expense.date}</div>
                        <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
