import { Button, Typography, Box, Container } from '@mui/material';
import '../css/HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/login');
    };

    return (
        <div className="hero-section">
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" className="hero-title">
                    Partner with Us
                </Typography>
                <Typography variant="h3" component="h2" className="hero-subtitle">
                    and grow your business
                </Typography>
                <Typography variant="body1" className="hero-promotion">
                    <span className="promotion-detail">Get orders from millions of customers</span>
                </Typography>

                <Box>
                    <Button
                        variant="contained"
                        size="large"
                        className="register-button"
                        onClick={handleRegisterClick}
                    >
                        Register your restaurant
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default HeroSection;