import { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/SignUp';
import RegistrationSteps from '../components/RegistrationSteps';


const AuthContainer = () => {
    const [view, setView] = useState('login');

    return (
        <>
            {view === 'login' && (
                <Login
                    switchToSignup={() => setView('signup')}
                    switchToEmail={() => setView('email')}
                    switchToGmail={() => setView('gmail')}
                />
            )}
            {view === 'signup' && (
                <Signup switchToLogin={() => setView('login')} />
            )}
            {view === 'email' && (
                <RegistrationSteps switchToLogin={() => setView('login')} />
            )}
            
        </>
    );
};

export default AuthContainer;
