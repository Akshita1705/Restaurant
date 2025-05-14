
import { Box, Button } from '@mui/material';
import LocationSection from '../sections/LocationSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';

import OwnerDetailsSection from '../sections/OwnerDetailsSection.jsx';

const RestaurantInfoForm = ({ onNext }) => {
    return (
        <Box className="form-content">
            <LocationSection />
            <ContactSection />
            <OwnerDetailsSection />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, mb: 2 }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={onNext}
                    sx={{
                        py: 1.5,
                        px: 6,
                        fontSize: '1.1rem',
                        backgroundColor: '#8a8a8a',
                        '&:hover': { backgroundColor: '#6b6b6b' },
                        borderRadius: '4px',
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default RestaurantInfoForm;