import { Box, Button } from '@mui/material';
import LocationSection from '../sections/LocationSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import OwnerDetailsSection from '../sections/OwnerDetailsSection.jsx';
import '../css/Forms.css';

const RestaurantInfoForm = ({ onNext }) => {
    return (
        <Box className="registration-card">
            <LocationSection />
            <ContactSection />
            <OwnerDetailsSection />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={onNext}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default RestaurantInfoForm;