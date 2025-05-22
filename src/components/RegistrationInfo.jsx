import React from 'react';
import '../css/RegistrationInfo.css';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  Collapse,
} from '@mui/material';

function RegistrationInformation() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Box className="registration-info-card">
      <Typography variant="h5" className="section-title">
        Restaurant Information
      </Typography>

      {/* Priority Contact Numbers */}
      <Box className="section-card">
        <Box onClick={() => setExpanded(!expanded)} className="section-header">
          <Typography variant="subtitle1">Priority Contact Numbers</Typography>
        </Box>

        <Collapse in={expanded}>
          <Typography variant="body2" className="highlight-text">
            These will be used for resolving order specific issues
          </Typography>

          {/* Contact 1 */}
          <RadioGroup row defaultValue="mobile">
            <FormControlLabel value="mobile" control={<Radio />} label="Mobile" />
            <FormControlLabel value="landline" control={<Radio />} label="Landline" />
            <FormControlLabel value="same" control={<Radio />} label="Same as Restaurant Number" />
          </RadioGroup>
          <Box className="phone-inputs">
            <TextField
              value="+91"
              disabled
              variant="outlined"
              size="small"
              className="country-code"
            />
            <TextField
              label="Number"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Box>

          {/* Contact 2 */}
          <RadioGroup row defaultValue="mobile">
            <FormControlLabel value="mobile" control={<Radio />} label="Mobile" />
            <FormControlLabel value="landline" control={<Radio />} label="Landline" />
            <FormControlLabel value="same" control={<Radio />} label="Same as Restaurant Number" />
          </RadioGroup>
          <Box className="phone-inputs">
            <TextField
              value="+91"
              disabled
              variant="outlined"
              size="small"
              className="country-code"
            />
            <TextField
              label="Number"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Box>
        </Collapse>
      </Box>

      {/* Banking/Accounting Info */}
      <Box className="section-card">
        <Typography variant="subtitle1" className="section-header">
          Receive Banking/Accounting Notifications
        </Typography>
        <Typography variant="body2" className="subtext">
          These will be used for billing related information
        </Typography>
        <RadioGroup defaultValue="owner">
          <FormControlLabel value="owner" control={<Radio />} label="Use Details of restaurant owner" />
          <FormControlLabel value="manual" control={<Radio />} label="Enter this information manually" />
        </RadioGroup>

        <Box className="account-inputs">
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            size="small"
          />
          <TextField
            label="Email ID"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>
        <Box className="account-inputs">
          <TextField
            value="+91"
            disabled
            variant="outlined"
            size="small"
            className="country-code"
          />
          <TextField
            label="Accounting Notifications number"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Button variant="contained" className="verify-button">verify</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default RegistrationInformation;
