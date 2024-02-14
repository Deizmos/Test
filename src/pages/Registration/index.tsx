import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";

import {registerUser} from "../../redux/actions/authActions";
import {PAGES} from "../../constatnts/constants";
import Input from "../../components/Input";

import "./styles.css";

const RegistrationPage: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = () => {
        dispatch(registerUser(email, password));
        navigate(PAGES.DASHBOARD);
    };

    return (
        <div className="registration-container">
            <h2>Registration Page</h2>
            <form className="registration-form" onSubmit={handleRegister}>
                <Input className="registration-form-input" label={'Email'} type={email} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input className="registration-form-input" label={'Password'} type={password} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
