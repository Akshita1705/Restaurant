
import {
    Box,
    Typography,
    TextField,
    Button,
    Divider
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ContactSection = () => {
    return (
        <Box className="form-section">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">Contact Number at the Restaurant</Typography>
                <KeyboardArrowDownIcon />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Your customers will call this number for queries
            </Typography>

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

            <Box sx={{ display: 'flex', mb: 3, gap: 1 }}>
                <TextField
                    placeholder="91"
                    defaultValue="91"
                    variant="outlined"
                    sx={{ width: '100px', flexShrink: 0 }}
                />
                <TextField
                    placeholder="STD Code"
                    variant="outlined"
                    sx={{ width: '150px', flexShrink: 0 }}
                />
                <TextField
                    placeholder="Landline Number"
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
        </Box>
    );
};

export default ContactSection;