import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import RestaurantInformation from "./RegistrationInfo.jsx";
import UploadDocuments from "./UploadDocuments.jsx";
import RestaurantInfoForm from "../forms/RestaurantInfoForm.jsx";
import RestaurantTypeForm from "../forms/RestaurantTypeForm.jsx";
import UploadImagesForm from "../forms/UploadImagesForm.jsx";
import { useLocation } from "react-router-dom";

import "../css/RegistrationSteps.css";

const RegistrationSteps = () => {
  const location = useLocation();
  const startStep = location.state?.startStep || "restaurant";
  const [activeStep, setActiveStep] = useState(startStep);

  return (
    <Box className="registration-steps-container">
      <Box className="steps-sidebar">
        <Box className="step-section">
          <Typography variant="body1" className="step-number">
            1. Add Your Restaurant Details
          </Typography>
          <Paper
            elevation={1}
            className={`step-card ${
              activeStep === "restaurant" ? "active" : ""
            }`}
            onClick={() => setActiveStep("restaurant")}
          >
            <Typography variant="body2">Restaurant Information</Typography>
          </Paper>

          <Paper
            elevation={1}
            className={`step-card ${
              activeStep === "typeTimings" ? "active" : ""
            }`}
            onClick={() => setActiveStep("typeTimings")}
          >
            <Typography variant="body2">Restaurant Type and Timings</Typography>
          </Paper>
          <Paper
            elevation={1}
            className={`step-card ${
              activeStep === "uploadImages" ? "active" : ""
            }`}
            onClick={() => setActiveStep("uploadImages")}
          >
            <Typography variant="body2">Upload Images</Typography>
          </Paper>
        </Box>

        <Box className="step-section">
          <Typography variant="body1" className="step-number">
            2. Register for online Ordering
          </Typography>

          <Paper
            elevation={1}
            className={`step-card ${
              activeStep === "restaurantInfo" ? "active" : ""
            }`}
            onClick={() => setActiveStep("restaurantInfo")}
          >
           <Box className="step-label">
              <Box className="step-icon current">1</Box>
              <Box>
                <Typography variant="body2">Restaurant Information</Typography>
              </Box>
            </Box>
          </Paper>

          <Paper
            elevation={1}
            className={`step-card ${
              activeStep === "uploadDocs" ? "active" : ""
            }`}
            onClick={() => setActiveStep("uploadDocs")}
          >
            <Box className="step-label">
              <Box className="step-icon current">2</Box>
              <Box>
                <Typography variant="body2">Upload Documents</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box className="step-content">
        {activeStep === "restaurantInfo" && <RestaurantInformation />}

        {activeStep === "uploadDocs" && <UploadDocuments />}
        {activeStep === "restaurant" && <RestaurantInfoForm />}
        {activeStep === "typeTimings" && <RestaurantTypeForm />}
        {activeStep === "uploadImages" && <UploadImagesForm />}
      </Box>
    </Box>
  );
};
export default RegistrationSteps;
