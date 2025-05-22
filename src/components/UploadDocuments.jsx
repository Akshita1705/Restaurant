import '../css/UploadDocuments.css';
import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputAdornment
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';

const UploadDocuments = () => {
  const [accountType, setAccountType] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/onboarding');
  };
  return (
    <Box className="upload-container">
      <Typography variant="h5">Upload Legal Documents</Typography>
      <Typography variant="body2" className="upload-caption">
        A mistake in this section will lead to delay in onboarding process
      </Typography>

      <Box className="upload-section">
        <Typography variant="h6">PAN Details</Typography>
        <Typography variant="caption">
          This is required for legal verification
        </Typography>
        <RadioGroup row defaultValue="yes">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <Box className="upload-row">
          <TextField
            className="full-width"
            label="Full Name"
            variant="outlined"
            size="small"
          />
          <TextField
            className="full-width"
            label="Email ID"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box className="upload-row">
          <TextField
            value="+91"
            disabled
            variant="outlined"
            size="small"
            className="disabled-input"
          />
          <TextField
            label="Accounting Notifications number"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Button variant="contained" className="verify-button">
            verify
          </Button>
        </Box>
      </Box>

      <Box className="upload-section">
        <Typography variant="h6">FSSAI Certificate</Typography>
        <Typography variant="caption">
          This is required to comply with regulations on food safety
        </Typography>
        <Box className="upload-row">
          <TextField
            className="full-width"
            label="FSSAI Certificate Number"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box className="upload-row expiry">
          <TextField
            label="FSSAI Expiry Date"
            id="expiry-date"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" startIcon={<UploadIcon />}>
            Upload FSSAI certificate
          </Button>
        </Box>
      </Box>

      <Box className="upload-section">
        <Typography variant="h6">Bank Details</Typography>
        <Typography variant="caption">
          Let us know where to deposit your money
        </Typography>
        <Box className="upload-row">
          <TextField
            className="full-width"
            label="Bank Account Number"
            variant="outlined"
            size="small"
          />
          <TextField
            className="full-width"
            label="Re-enter Account Number"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box className="upload-row">
          <Select
            className="full-width"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            displayEmpty
            size="small"
            variant="outlined"
          >
            <MenuItem value="" disabled>
              Select Account Type
            </MenuItem>
            <MenuItem value="saving">Saving</MenuItem>
            <MenuItem value="current">Current</MenuItem>
          </Select>

          <TextField
            className="full-width"
            label="Bank IFSC"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            className="account-button"
            onClick={handleClick}
          >
            Verify Account Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadDocuments;
