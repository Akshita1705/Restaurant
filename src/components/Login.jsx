import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    Typography,
    Button,
    Box,
    Paper,
    Container,
    TextField,
    IconButton,
    Divider
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import '../css/Login.css';

const Login = ({ switchToSignup, switchToEmail }) => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <Container maxWidth="sm" className="login-container">
            <Paper elevation={3} className="login-paper">
                <Box className="login-header">
                    <Typography variant="h5" component="h1" className="login-title">
                        Login
                    </Typography>
                    <IconButton aria-label="close" onClick={() => navigate(-1)}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box component="form" className="phone-form">
                    <Box className="phone-input-wrapper">
                        <Box className="country-selector">
                            <img
                                src="https://flagcdn.com/w40/in.png"
                                alt="India Flag"
                                className="flag-img"
                            />
                            <Typography className="country-code">+91</Typography>
                        </Box>

                        <TextField
                            placeholder="Phone"
                            variant="outlined"
                            size="small"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            fullWidth
                            className="phone-input"
                        />
                    </Box>

                    <Button type="submit" fullWidth variant="contained" className="submit-button">
                        Send One Time Password
                    </Button>

                    <Box className="divider-box">
                        <Divider className="divider-line" />
                        <Typography variant="body2" className="divider-text">or</Typography>
                        <Divider className="divider-line" />
                    </Box>

                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<EmailIcon />}
                        onClick={switchToEmail}
                        className="email-button"
                    >
                        Continue with Email
                    </Button>

                    <Box className="form-footer">
                        <Typography variant="body2" className="footer-text">
                            New?
                        </Typography>
                        <Typography
                            variant="body2"
                            className="footer-link"
                            onClick={switchToSignup}
                        >
                            Create account
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
