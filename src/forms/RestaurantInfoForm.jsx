import { Box, Button } from '@mui/material';
import LocationSection from '../sections/LocationSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import OwnerDetailsSection from '../sections/OwnerDetailsSection.jsx';
import '../css/Forms.css';

const RestaurantInfoForm = ({ onNext }) => {
    return (
        <Box className="form-content">
            <LocationSection />
            <ContactSection />
            <OwnerDetailsSection />

            <Box className="form-button-container">
                <Button
                    variant="contained"
                    size="large"
                    onClick={onNext}
                    className="form-button"
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default RestaurantInfoForm;