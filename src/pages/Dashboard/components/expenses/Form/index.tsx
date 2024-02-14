import React, { useState } from 'react';
import {ExpenseFormProps} from "../../../../../types/interfaces";

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense,expenses }) => {
    const [expenseDescription, setExpenseDescription] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const handleAddExpense = () => {
        const userMail = localStorage.getItem('email') ?? '';
        const isValidExpense = !isNaN(parseFloat(expenseAmount)) && expenseDescription.trim() !== '' && expenseDate.trim() !== '';

        if (isValidExpense) {
            onAddExpense({
                id: expenses.length + 1,
                description: expenseDescription,
                amount: parseFloat(expenseAmount),
                date: expenseDate,
                userId: userMail,
            });
            setExpenseDescription('');
            setExpenseAmount('');
            setExpenseDate('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Description"
                value={expenseDescription}
                onChange={(e) => setExpenseDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Amount"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
            />
            <input
                type="date"
                placeholder="Date"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
            />
            <button onClick={handleAddExpense}>Add Expense</button>
        </div>
    );
};

export default ExpenseForm;
