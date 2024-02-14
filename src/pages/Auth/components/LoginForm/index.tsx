import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {loginUser} from "../../../../redux/actions/authActions";
import {PAGES} from "../../../../constatnts/constants";
import Input from "../../../../components/Input";

import "./styles.css";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(loginUser(email, password));
        navigate(PAGES.DASHBOARD);
    };

    return (
        <form className='login-form-container' onSubmit={handleLogin}>
            <Input className='login-form-input' label={'Email'} type={email} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input className='login-form-input' label={'Password'} type={password} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
