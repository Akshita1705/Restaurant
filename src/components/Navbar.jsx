import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container
} from '@mui/material';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} className="navbar-appbar">
      <Container maxWidth="lg">
        <Toolbar className="navbar-toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleLogoClick}>
            <Box component="div" className="logo-container">
              <Box component="img" src="" alt="Logo" sx={{ height: 40 }} />
            </Box>
          </Typography>
          <Button variant="contained" className="login-button" onClick={handleLoginClick}>Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
