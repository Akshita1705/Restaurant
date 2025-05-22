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
import GoogleIcon from '@mui/icons-material/Google';
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

                <Box component="form" >
    <Box className="phone-number" >
       <Box className="flag">
  <img
    src="https://flagcdn.com/w40/in.png"
    alt="India Flag"
   
  />
</Box>



        <TextField
            label="+91"
            size="small"
            variant="outlined"
            disabled
            className='prefix'
         
        />

        <TextField
            label="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            size="small"
            fullWidth
            variant="outlined"
        />
    </Box>

    <Button type="submit" fullWidth variant="contained" className="submit-button">
        Send One time password
    </Button>

    <Box className="divider-box">
        <Divider className="divider-line" />
        <Typography variant="body2" className="divider-text">or</Typography>
        <Divider className="divider-line" />
    </Box>

    <Button
        fullWidth
        variant="contained"
        startIcon={<EmailIcon />}
       onClick={switchToEmail}
        className="submit-button"
    >
        Continue with Email
    </Button>

    <Button
        fullWidth
        variant="contained"
        startIcon={<GoogleIcon />}
        className="submit-button"
    >
        Continue with Gmail
    </Button>

    <Box className="form-footer">
        <Typography variant="body2" className="footer-text">
            New to our APP ?
        </Typography>
        <Typography
            variant="body2"
            className="footer-link"
             onClick={switchToSignup}
           
        >
            Create Account
        </Typography>
    </Box>
</Box>

            </Paper>
        </Container>
    );
};

export default Login;
