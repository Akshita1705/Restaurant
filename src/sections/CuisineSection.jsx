import { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup
} from '@mui/material';

const CuisineSection = () => {
    const [cuisineTypes, setCuisineTypes] = useState({
        indian: false,
        chinese: false,
        italian: false,
        american: false,
        mexican: false,
        thai: false,
        japanese: false,
        mediterranean: false,
        lebanese: false,
        french: false,
        spanish: false,
        korean: false,
        vietnamese: false,
        greek: false,
        turkish: false,
        continental: false,
        southIndian: false,
        northIndian: false,
        bengali: false,
        punjabi: false
    });

    const [showMoreCuisines, setShowMoreCuisines] = useState(false);

    const handleCuisineTypeChange = (event) => {
        setCuisineTypes({
            ...cuisineTypes,
            [event.target.name]: event.target.checked
        });
    };

    const toggleMoreCuisines = () => {
        setShowMoreCuisines(!showMoreCuisines);
    };

    return (
        <Box className="form-section" sx={{ mt: 3 }}>
            {/* Cuisine Types Section */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: 2,
                mt: 2,
                pb: 2,
                borderBottom: '1px solid #e0e0e0'
            }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
                    Type of Cuisines
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Select the options which best Describe the food you serve
            </Typography>

            <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {/* Display first 8 cuisines */}
                {Object.entries(cuisineTypes).slice(0, 8).map(([key, value]) => (
                    <Box key={key} sx={{ width: '33%', mb: 1 }}>
                        <FormControlLabel
                            control={<Checkbox checked={value} onChange={handleCuisineTypeChange} name={key} />}
                            label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        />
                    </Box>
                ))}

                {/* Show more cuisines if expanded */}
                {showMoreCuisines && Object.entries(cuisineTypes).slice(8).map(([key, value]) => (
                    <Box key={key} sx={{ width: '33%', mb: 1 }}>
                        <FormControlLabel
                            control={<Checkbox checked={value} onChange={handleCuisineTypeChange} name={key} />}
                            label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        />
                    </Box>
                ))}
            </FormGroup>

            <Button
                onClick={toggleMoreCuisines}
                sx={{
                    color: 'primary.main',
                    mt: 1,
                    fontWeight: 'medium',
                    '&:hover': { backgroundColor: 'transparent' },
                    padding: 0
                }}
            >
                {showMoreCuisines ? '- Show Less' : '+ Load More'}
            </Button>
        </Box>
    );
};

export default CuisineSection;