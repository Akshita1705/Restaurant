
import { Box, Typography, Button } from '@mui/material';
import EstablishmentTypeSection from '../sections/EstablishmentTypeSection';
import CuisineSection from '../sections/CuisineSection';

const RestaurantTypeForm = ({ onNext }) => {
    return (
        <Box className="form-content">
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                Restaurant Type and Timings
            </Typography>

            <EstablishmentTypeSection />
            <CuisineSection />

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

export default RestaurantTypeForm;