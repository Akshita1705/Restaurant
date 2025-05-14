
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <header className="header">
            <Button
                variant="outlined"
                className="partner-button"
                onClick={handleHomeClick}
            >
                Restaurant Partner
            </Button>
            <Button
                variant="contained"
                className="login-button"
                onClick={handleLogin}
            >
                Login
            </Button>
        </header>
    );
};

export default Header;