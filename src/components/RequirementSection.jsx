
import { Typography, Box, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../css/RequirementsSection.css';

const RequirementsSection = () => {
    const requirements = [
        'Pan Card',
        'FSSAI license',
        'Bank account details',
        'GST number, if applicable',
        'Menu & profile food image'
    ];

    return (
        <div className="requirements-section">
            <Box className="requirements-container">
                <Typography variant="h5" component="h3" className="section-title">
                    Get Started - It only takes 10 minutes
                </Typography>

                <Typography variant="body1" className="section-subtitle">
                    Please keep these documents and details ready for a smooth sign-up
                </Typography>

                <Box className="requirements-grid">
                    <Box className="requirements-list">
                        {requirements.map((req, index) => (
                            <Box key={index} className="requirement-item">
                                <CheckCircleOutlineIcon className="check-icon" />
                                <Typography variant="body1">{req}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box className="video-container">
                        <Button variant="outlined" className="video-button">
                            Onboarding Guide - Video
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default RequirementsSection;