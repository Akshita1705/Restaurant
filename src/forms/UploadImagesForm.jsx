import { Box, Typography, Button, Divider } from '@mui/material';
import ImageUploadSection from '../sections/ImageUploadSection';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Forms.css';

const UploadImagesForm = ({ onNext }) => {
    const [restaurantImages, setRestaurantImages] = useState([]);
    const [foodImages, setFoodImages] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
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
            <Box className="success-container">
                <Box className="success-icon">
                    <Typography component="span" className="success-icon-text">✓</Typography>
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
                    className="success-button-primary"
                >
                    STEP -2 Register for online ordering
                </Button>

                <Button
                    variant="contained"
                    className="success-button-secondary"
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
                    Please upload at least one facade shot
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

            <Box className="submit-button-container">
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    className="form-button"
                >
                    Submit Restaurant Details
                </Button>
            </Box>
        </Box>
    );
};

export default UploadImagesForm;