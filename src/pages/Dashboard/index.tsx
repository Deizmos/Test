import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {logoutUser} from "../../redux/actions/authActions";
import List from "./components/expenses/List";
import {PAGES} from "../../constatnts/constants";

import "./styles.css";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [expenses, setExpenses] = useState<any[]>([]);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false');

        if (!storedEmail || !storedPassword || !isAuthenticated) {
            dispatch(logoutUser());
            navigate(PAGES.MAIN);
        }

        const savedExpenses = localStorage.getItem('expenses');
        if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
        }
    }, [dispatch, navigate]);

    const handleAddExpense = (newExpense: any) => {
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const handleDeleteExpense = (id: number) => {
        const updatedExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate(PAGES.MAIN);
    };

    return (
        <div className="dashboard-container">
            <List expenses={expenses} onAddExpense={handleAddExpense} onDeleteExpense={handleDeleteExpense}/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
