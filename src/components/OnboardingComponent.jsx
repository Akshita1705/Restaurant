import { Box, Typography, Paper, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../css/OnboardingComplete.css'; 

const OnboardingComplete = () => {
    
  return (
    <Box className="onboarding-container">
      <Paper elevation={3} className="onboarding-card">
        <CheckCircleIcon className="check-icon" />
        <Typography variant="h6" className="onboarding-title">
          Onboarding&nbsp;&nbsp;Completed
        </Typography>
        <Typography variant="h6" className="onboarding-subtitle">
          Restaurant&nbsp;&nbsp;details Submitted
        </Typography>
        <Typography variant="body2" className="onboarding-text">
          Our team will verify the details and update once your page is live
        </Typography>
        <Divider className="divider" />
      </Paper>
    </Box>
  );
};

export default OnboardingComplete;


