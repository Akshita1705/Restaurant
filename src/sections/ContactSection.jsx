import {
    Box,
    Typography,
    TextField,
    Button,
    Divider,
    Collapse // Add this import
} from '@mui/material';
import { useState } from 'react'; // Add this import
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ContactSection = () => {
    const [expanded, setExpanded] = useState(true); // Add this state

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
                <Typography variant="h6" fontWeight="bold">Contact Number at the Restaurant</Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.3s'
                    }}
                />
            </Box>

            <Collapse in={expanded}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Your customers will call this number for queries
                </Typography>

                <Box sx={{ display: 'flex', mb: 2, gap: 1 }}>
                    <TextField
                        placeholder="91"
                        defaultValue="91"
                        variant="outlined"
                        size="small"
                        sx={{ width: '100px', flexShrink: 0 }}
                    />
                    <TextField
                        label="Mobile Number at the restaurant"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        sx={{
                            height: '40px',
                            flexShrink: 0,
                            bgcolor: '#1976d2', // Changed from #ef4f5f
                            '&:hover': { bgcolor: '#1565c0' } // Changed from #d8454f
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

                <Box sx={{ display: 'flex', mb: 3, gap: 1 }}>
                    <TextField
                        placeholder="91"
                        defaultValue="91"
                        variant="outlined"
                        size="small"
                        sx={{ width: '100px', flexShrink: 0 }}
                    />
                    <TextField
                        label="STD Code"
                        variant="outlined"
                        size="small"
                        sx={{ width: '150px', flexShrink: 0 }}
                    />
                    <TextField
                        label="Landline Number"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        sx={{
                            height: '40px',
                            flexShrink: 0,
                            bgcolor: '#1976d2', // Changed from #ef4f5f
                            '&:hover': { bgcolor: '#1565c0' } // Changed from #d8454f
                        }}
                    >
                        verify
                    </Button>
                </Box>
            </Collapse>
        </Box>
    );
};

export default ContactSection;