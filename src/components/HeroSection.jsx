
import { Button, Typography, Box } from '@mui/material';
import '../css/HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
      const navigate = useNavigate(); 

    const handleRegisterClick = () => {
        navigate('/login'); 
    };

    return (
        <div className="hero-section">
            <Typography variant="h3" component="h1" className="hero-title">
                Partner with Us
            </Typography>
            <Typography variant="h4" component="h2" className="hero-subtitle">
                and grow your business
            </Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    size="large"
                    className="register-button"
                    onClick={handleRegisterClick}
                >
                    Register your restaurant
                </Button>
            </Box>
        </div>
    );
};

export default HeroSection;