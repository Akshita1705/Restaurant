import { Box, Typography, Button, Divider } from '@mui/material';
import ImageUploadSection from '../sections/ImageUploadSection';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const UploadImagesForm = ({ onNext }) => {
    const [restaurantImages, setRestaurantImages] = useState([]);
    const [foodImages, setFoodImages] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/online');
    }

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const handleImageUpload = (event, type) => {
        const files = event.target.files;
        if (files) {
            const newImages = Array.from(files).map(file => ({
                file,
                preview: URL.createObjectURL(file),
                name: file.name
            }));

            if (type === 'restaurant') {
                setRestaurantImages([...restaurantImages, ...newImages]);
            } else {
                setFoodImages([...foodImages, ...newImages]);
            }
        }
    };

    const handleDrop = (event, type) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const newImages = Array.from(event.dataTransfer.files).map(file => ({
                file,
                preview: URL.createObjectURL(file),
                name: file.name
            }));

            if (type === 'restaurant') {
                setRestaurantImages([...restaurantImages, ...newImages]);
            } else {
                setFoodImages([...foodImages, ...newImages]);
            }
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    if (isSubmitted) {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                maxWidth: '800px',
                mx: 'auto'
            }}>
                <Box
                    sx={{
                        width: 120,
                        height: 120,
                        bgcolor: '#22c55e',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 3
                    }}
                >
                    <Typography component="span" sx={{ color: 'white', fontSize: '60px' }}>✓</Typography>
                </Box>

                <Typography variant="h6" sx={{ mb: 2 }}>STEP -1 Completed</Typography>

                <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                    Restaurant listing details submitted
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Our team will verify the details and update once your page is live.
                </Typography>

                <Divider sx={{ width: '100%', mb: 4 }} />

                <Button
                    variant="contained"
                     onClick={handleClick}
                    sx={{
                        py: 2,
                        px: 4,
                        mb: 3,
                        backgroundColor: '#22c55e',
                        '&:hover': { backgroundColor: '#16a34a' },
                        borderRadius: '4px',
                    }}
                >
                    STEP -2 Register for online ordering
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        py: 1.5,
                        px: 4,
                        backgroundColor: '#9e9e9e',
                        '&:hover': { backgroundColor: '#757575' },
                        borderRadius: '4px',
                    }}
                >
                    Done For now
                </Button>
            </Box>
        );
    }

    return (
        <Box className="form-content">
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                Upload Images
            </Typography>

            <Box className="form-section">
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Restaurant Images
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    Please upload atleast one facade shot
                </Typography>
                <ImageUploadSection
                    type="restaurant"
                    images={restaurantImages}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onImageUpload={handleImageUpload}
                />
            </Box>

            <Box className="form-section" sx={{ mt: 3 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Food Images
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'orange' }}>
                    Please do not put images of raw ingredients
                </Typography>
                <ImageUploadSection
                    type="food"
                    images={foodImages}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onImageUpload={handleImageUpload}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    sx={{
                        py: 1.5,
                        px: 6,
                        fontSize: '1.1rem',
                        backgroundColor: '#8a8a8a',
                        '&:hover': { backgroundColor: '#6b6b6b' },
                        borderRadius: '4px',
                        minWidth: '250px'
                    }}
                >
                    Submit Restaurant Details
                </Button>
            </Box>
        </Box>
    );
};

export default UploadImagesForm;