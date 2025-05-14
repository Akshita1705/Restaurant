import  { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Divider
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const OwnerDetailsSection = () => {
    const [sameAsRestaurant, setSameAsRestaurant] = useState(true);

    const handleContactOptionChange = (event) => {
        setSameAsRestaurant(event.target.value === 'same');
    };

    return (
        <Box className="form-section">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">Restaurant owner details</Typography>
                <KeyboardArrowDownIcon />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This will be used to share revenue related communications
            </Typography>

            <RadioGroup
                value={sameAsRestaurant ? 'same' : 'different'}
                onChange={handleContactOptionChange}
                sx={{ mb: 2 }}
            >
                <FormControlLabel
                    value="same"
                    control={<Radio />}
                    label="Same as Restaurant mobile number"
                />
                <FormControlLabel
                    value="different"
                    control={<Radio />}
                    label="Use different contact details"
                />
            </RadioGroup>

            {!sameAsRestaurant && (
                <>
                    <Box sx={{ display: 'flex', mb: 2, gap: 1 }}>
                        <TextField
                            placeholder="91"
                            defaultValue="91"
                            variant="outlined"
                            sx={{ width: '100px', flexShrink: 0 }}
                        />
                        <TextField
                            placeholder="Mobile Number at the restaurant"
                            variant="outlined"
                            sx={{ flex: 1 }}
                        />
                        <Button
                            variant="contained"
                            sx={{ width: '120px', flexShrink: 0, bgcolor: '#9e9e9e', '&:hover': { bgcolor: '#757575' } }}
                        >
                            verify
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Divider sx={{ flexGrow: 1 }} />
                        <Typography variant="body2" sx={{ px: 2, color: '#666' }}>or Want to share landline</Typography>
                        <Divider sx={{ flexGrow: 1 }} />
                    </Box>

                    <Box sx={{ display: 'flex', mb: 3, gap: 2 }}>
                        <TextField
                            fullWidth
                            placeholder="Owner Name"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            placeholder="Owner Email address"
                            variant="outlined"
                        />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default OwnerDetailsSection;