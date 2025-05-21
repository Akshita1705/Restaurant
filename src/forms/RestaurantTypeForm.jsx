import { Box, Typography, Button } from '@mui/material';
import EstablishmentTypeSection from '../sections/EstablishmentTypeSection';
import CuisineSection from '../sections/CuisineSection';
import '../css/Forms.css';

const RestaurantTypeForm = ({ onNext }) => {
    return (
        <Box className="form-content">
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                Restaurant Type and Timings
            </Typography>

            <EstablishmentTypeSection />
            <CuisineSection />

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

export default RestaurantTypeForm;