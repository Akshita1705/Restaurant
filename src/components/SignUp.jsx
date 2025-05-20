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
    Divider,
    Checkbox,
    FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import '../css/SignUp.css'; 

const Signup = ({switchToLogin}) => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);

    return (
        <Container maxWidth="sm" className="signup-container">
            <Paper elevation={3} className="signup-paper">
                <Box className="signup-header">
                    <Typography variant="h5" component="h1" className="signup-title">
                        Signup
                    </Typography>
                   <IconButton aria-label="close" onClick={() => navigate(-1)}>
    <CloseIcon />
    </IconButton>
                </Box>

                <Box component="form">
                    <Box className="phone-number">
                        <TextField
                            label="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            size="small"
                            fullWidth
                            variant="outlined"
                            sx={{ marginRight: '6px' }}
                        />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="small"
                            fullWidth
                            variant="outlined"
                        />
                    </Box>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                size="small"
                            />
                        }
                        label={
                            <Typography variant="body2">
                                I agree to{' '}
                                <span style={{ textDecoration: 'underline' }}>
                                    Terms of Service, Privacy Policy and Content Policies
                                </span>
                            </Typography>
                        }
                        sx={{ margin: '12px 0' }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        className="submit-button"
                        disabled={!agree}
                    >
                        Create account
                    </Button>

                    <Box className="divider-box">
                        <Divider className="divider-line" />
                        <Typography variant="body2" className="divider-text">or</Typography>
                        <Divider className="divider-line" />
                    </Box>

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
                            Already have an account?
                        </Typography>
                        <Typography
                       variant="body2"
                       className="footer-link"
                       onClick={switchToLogin}
                       >
                        Login
                         </Typography>

                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Signup;
