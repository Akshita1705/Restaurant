import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Divider,
    Collapse // Add this import
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const OwnerDetailsSection = () => {
    const [sameAsRestaurant, setSameAsRestaurant] = useState(true);
    const [expanded, setExpanded] = useState(true); // Add this state

    const handleContactOptionChange = (event) => {
        setSameAsRestaurant(event.target.value === 'same');
    };

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Box className="form-section">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    cursor: 'pointer'
                }}
                onClick={toggleExpanded}
            >
                <Typography variant="h6" fontWeight="bold">Restaurant owner details</Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.3s'
                    }}
                />
            </Box>

            <Collapse in={expanded}>
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
                                size="small"
                                sx={{ width: '100px', flexShrink: 0 }}
                            />
                            <TextField
                                placeholder="Mobile Number at the restaurant"
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    height: '40px',
                                    flexShrink: 0,
                                    bgcolor: '#ef4f5f',
                                    '&:hover': { bgcolor: '#d8454f' }
                                }}
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
                                size="small"
                            />
                            <TextField
                                fullWidth
                                placeholder="Owner Email address"
                                variant="outlined"
                                size="small"
                            />
                        </Box>
                    </>
                )}
            </Collapse>
        </Box>
    );
};

export default OwnerDetailsSection;