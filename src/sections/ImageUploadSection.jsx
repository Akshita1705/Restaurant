
import { Box, Typography } from '@mui/material';

const ImageUploadSection = ({ type, images, onDrop, onDragOver, onImageUpload }) => {
    const inputId = `file-upload-${type}`;

    return (
        <Box
            sx={{
                backgroundColor: '#e8e8e8',
                borderRadius: 1,
                p: 3,
                minHeight: 250,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                position: 'relative',
                cursor: 'pointer'
            }}
            onDrop={(e) => onDrop(e, type)}
            onDragOver={onDragOver}
            component="label"
            htmlFor={inputId}
        >
            {images.length > 0 ? (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'flex-start' }}>
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 120,
                                height: 120,
                                m: 1,
                                borderRadius: 1,
                                overflow: 'hidden',
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0px 1px 3px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img
                                src={image.preview}
                                alt={`Preview ${index}`}
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    ))}

                    <Box
                        sx={{
                            width: 120,
                            height: 120,
                            m: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ffffff',
                            borderRadius: 1,
                            border: '1px solid #ddd',
                            flexDirection: 'column',
                            cursor: 'pointer'
                        }}
                        component="label"
                        htmlFor={inputId}
                    >
                        <Typography color="primary" sx={{ mb: 0.5 }}>Add Images</Typography>
                        <Typography component="span" color="primary" sx={{ fontSize: '24px' }}>+</Typography>
                    </Box>
                </Box>
            ) : (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Box
                        sx={{
                            width: 120,
                            height: 120,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ffffff',
                            borderRadius: 1,
                            border: '1px solid #ddd',
                            flexDirection: 'column',
                            mx: 'auto',
                            mb: 3,
                            cursor: 'pointer'
                        }}
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
