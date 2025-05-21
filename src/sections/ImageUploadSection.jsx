import { Box, Typography } from '@mui/material';
import '../css/Forms.css';

const ImageUploadSection = ({ type, images, onDrop, onDragOver, onImageUpload }) => {
    const inputId = `file-upload-${type}`;

    return (
        <Box
            className="image-upload-section"
            onDrop={(e) => onDrop(e, type)}
            onDragOver={onDragOver}
            component="label"
            htmlFor={inputId}
        >
            {images.length > 0 ? (
                <Box className="image-preview-container">
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            className="image-preview-box"
                        >
                            <img
                                src={image.preview}
                                alt={`Preview ${index}`}
                                className="image-preview"
                            />
                        </Box>
                    ))}

                    <Box
                        className="add-image-box"
                        component="label"
                        htmlFor={inputId}
                    >
                        <Typography color="primary" sx={{ mb: 0.5 }}>Add Images</Typography>
                        <Typography component="span" color="primary" sx={{ fontSize: '24px' }}>+</Typography>
                    </Box>
                </Box>
            ) : (
                <Box className="empty-upload-container">
                    <Box
                        className="empty-upload-box"
                        component="label"
                        htmlFor={inputId}
                    >
                        <Typography color="primary" sx={{ mb: 0.5 }}>Add Images</Typography>
                        <Typography component="span" color="primary" sx={{ fontSize: '24px' }}>+</Typography>
                    </Box>

                    <Typography color="text.secondary" sx={{ mt: 2 }}>
                        Drag and Drop to upload or Browse
                    </Typography>
                </Box>
            )}

            <input
                id={inputId}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => onImageUpload(e, type)}
                style={{ display: 'none' }}
            />
        </Box>
    );
};

export default ImageUploadSection;