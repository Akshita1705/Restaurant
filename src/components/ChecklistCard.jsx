
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import '../css/ChecklistCard.css';

const checklistItems = [
  'Pan Card',
  'FSSAI license',
  'Bank account details',
  'GST number, if applicable',
  'Menu & profile food image'
];

const ChecklistCard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
  navigate('/restaurant-info', { state: { startStep: 'restaurantInfo' } });
};
  return (
    <Box className="getstarted-container">
      <Card className="getstarted-card">
        <CardContent>
          <Typography variant="h6" className="getstarted-title">
            Get Started with online Ordering
          </Typography>
          <Typography variant="body2" className="getstarted-subtitle">
            Please keep these documents and details ready for a smooth sign-up
          </Typography>

          <Grid container spacing={1}>
            {checklistItems.map((item, index) => (
              <Grid  key={index} className="getstarted-checkitem">
                <CheckCircleIcon className="getstarted-icon" />
                <Typography variant="body2">{item}</Typography>
              </Grid>
            ))}
          </Grid>

          <Divider className="getstarted-divider" />

          <Box className="getstarted-button-box">
            <Button variant="contained" className="getstarted-button" onClick={handleClick}>
              Let's Go
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChecklistCard;
