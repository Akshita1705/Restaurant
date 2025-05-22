import { Typography, Box, Button, Container, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../css/RequirementsSection.css';
import helpImage from '../assets/img/help.png';

const RequirementsSection = () => {
    const requirements = [
        'PAN card',
        'FSSAI license',
        'Bank account details',
        'GST number, if applicable',
        'Menu & profile food image'
    ];

    const links = [
        { text: "Don't have a FSSAI license?", link: "Apply here" },
        { text: "What is profile food image?", link: "Refer here" }
    ];

    return (
        <div className="requirements-section">
            <Container maxWidth="lg">
                <Box className="requirements-container">
                    <Typography variant="h4" component="h3" className="section-title">
                        Get Started - It only takes 10 minutes
                    </Typography>

                    <Typography variant="body1" className="section-subtitle">
                        Please keep these documents and details ready for a smooth sign-up
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={7}>
                            <Box className="requirements-list">
                                {requirements.map((req, index) => (
                                    <Box key={index} className="requirement-item">
                                        <CheckCircleIcon className="check-icon" />
                                        <Typography variant="body1">{req}</Typography>

                                        {index === 1 && (
                                            <Typography variant="body2" className="requirement-link">
                                                Don't have a FSSAI license? <span className="link-text">Apply here</span>
                                            </Typography>
                                        )}

                                        {index === 4 && (
                                            <Typography variant="body2" className="requirement-link">
                                                What is profile food image? <span className="link-text">Refer here</span>
                                            </Typography>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box className="video-container">
                                <img
                                    src={helpImage}
                                    alt="Onboarding video thumbnail"
                                    className="video-thumbnail"
                                />
                                <Button variant="outlined" className="video-button">
                                    Onboarding Guide - Video
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default RequirementsSection;