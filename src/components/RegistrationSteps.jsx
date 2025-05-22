import { useState } from 'react';
import { Box } from '@mui/material';
import RestaurantInformation from './RegistrationInfo.jsx';
import UploadDocuments from './UploadDocuments.jsx';
import RestaurantInfoForm from '../forms/RestaurantInfoForm.jsx';
import RestaurantTypeForm from '../forms/RestaurantTypeForm.jsx';
import UploadImagesForm from '../forms/UploadImagesForm.jsx';
import { useLocation } from 'react-router-dom';

import '../css/RegistrationSteps.css';

const RegistrationSteps = () => {
    const location = useLocation();
    const startStep = location.state?.startStep || 'restaurant';
    const [activeStep, setActiveStep] = useState(startStep);

    return (
        <Box className="registration-root">
            <Box className="registration-sidebar">
                <Box className="sidebar-card">
                    <div className="sidebar-title">Registration Steps</div>
                    <div className="sidebar-steps">
                        <div
                            className={`sidebar-step ${activeStep === 'restaurant' ? 'active' : ''}`}
                            onClick={() => setActiveStep('restaurant')}
                        >
                            <span className="sidebar-step-circle">1</span>
                            <span className="sidebar-step-label">Restaurant Details</span>
                        </div>
                        <div
                            className={`sidebar-step ${activeStep === 'typeTimings' ? 'active' : ''}`}
                            onClick={() => setActiveStep('typeTimings')}
                        >
                            <span className="sidebar-step-circle">2</span>
                            <span className="sidebar-step-label">Type & Timings</span>
                        </div>
                        <div
                            className={`sidebar-step ${activeStep === 'uploadImages' ? 'active' : ''}`}
                            onClick={() => setActiveStep('uploadImages')}
                        >
                            <span className="sidebar-step-circle">3</span>
                            <span className="sidebar-step-label">Upload Images</span>
                        </div>
                        <div className="sidebar-divider"></div>
                        <div
                            className={`sidebar-step ${activeStep === 'restaurantInfo' ? 'active' : ''}`}
                            onClick={() => setActiveStep('restaurantInfo')}
                        >
                            <span className="sidebar-step-circle">4</span>
                            <span className="sidebar-step-label">Restaurant Info</span>
                        </div>
                        <div
                            className={`sidebar-step ${activeStep === 'uploadDocs' ? 'active' : ''}`}
                            onClick={() => setActiveStep('uploadDocs')}
                        >
                            <span className="sidebar-step-circle">5</span>
                            <span className="sidebar-step-label">Upload Documents</span>
                        </div>
                    </div>
                </Box>
            </Box>
            <Box className="registration-main">
                <Box className="registration-card">
                    {activeStep === 'restaurantInfo' && <RestaurantInformation />}
                    {activeStep === 'uploadDocs' && <UploadDocuments />}
                    {activeStep === 'restaurant' && <RestaurantInfoForm />}
                    {activeStep === 'typeTimings' && <RestaurantTypeForm />}
                    {activeStep === 'uploadImages' && <UploadImagesForm />}
                </Box>
            </Box>
        </Box>
    );
};
export default RegistrationSteps;