import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Paper
} from '@mui/material';
import { AccountCircle, ExpandMore } from '@mui/icons-material';
import '../css/Navbar.css'; 

const Navbar = () => {
  return (
    <>
      <AppBar className="navbar-appbar" color="default">
        <Toolbar className="navbar-toolbar">
          <Button variant="outlined" >Restaurant Partner</Button>

          <Box className="user-box">
            <AccountCircle className="icon" />
            <Paper className="user-paper">
              <Typography variant="body2" className="name">
                First Name
              </Typography>
            </Paper>
            <ExpandMore />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
