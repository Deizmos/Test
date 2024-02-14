import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import RegistrationPage from "./pages/Registration";
import {PAGES} from "./constatnts/constants";

import "./styles.css";
const App: React.FC = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path={PAGES.MAIN} element={<LoginPage />} />
                    <Route path={PAGES.REGISTER} element={<RegistrationPage />} />
                    <Route path={PAGES.DASHBOARD} element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
