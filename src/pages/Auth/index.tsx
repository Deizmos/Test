import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../redux/actions/authActions';
import LoginForm from "./components/LoginForm";
import {PAGES} from "../../constatnts/constants";

import "./styles.css";


const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false');

        if (savedEmail && savedPassword && isAuthenticated) {
            dispatch(loginUser(savedEmail, savedPassword));
            navigate(PAGES.DASHBOARD);
        }
    }, []);

    return (
        <div className='login-container'>
            <h2>Авторизация</h2>
            <LoginForm/>
            <p>Нет аккаунта? <Link to={PAGES.REGISTER}>Регистрация</Link></p>
        </div>
    );
};

export default Auth;

