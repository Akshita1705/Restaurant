import { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Collapse
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const EstablishmentTypeSection = () => {
    const [establishmentType, setEstablishmentType] = useState('deliveryOnly');
    const [outletTypes, setOutletTypes] = useState({
        bakery: false,
        beverageShop: false,
        cafe: false,
        casualDining: false,
        dessertParlour: false,
        foodCourt: false,
        quickBites: false,
        sweetShop: false
    });

    const [showMoreOutletTypes, setShowMoreOutletTypes] = useState(false);
    const additionalOutletTypes = {
        fineRestaurant: false,
        cloudKitchen: false,
        pub: false,
        lounge: false,
        buffet: false,
        dhaba: false,
        fastFood: false,
        foodTruck: false
    };

    const [extendedOutletTypes, setExtendedOutletTypes] = useState(additionalOutletTypes);
    const [expanded, setExpanded] = useState(true);

    const handleEstablishmentTypeChange = (event) => {
        setEstablishmentType(event.target.value);
    };

    const handleOutletTypeChange = (event) => {
        if (event.target.name in outletTypes) {
            setOutletTypes({
                ...outletTypes,
                [event.target.name]: event.target.checked
            });
        } else {
            setExtendedOutletTypes({
                ...extendedOutletTypes,
                [event.target.name]: event.target.checked
            });
        }
    };

    const toggleMoreOutletTypes = () => {
        setShowMoreOutletTypes(!showMoreOutletTypes);
    };

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Box className="form-section">
            {/* Establishment Type Section */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: 2,
                mt: 2,
                pb: 2,
                borderBottom: '1px solid #e0e0e0',
                cursor: 'pointer'
            }}
                onClick={toggleExpanded}
            >
                <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
                    Establishment Type - Delivery Only
                </Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        marginLeft: 'auto',
                        transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.3s'
                    }}
                />
            </Box>

            <Collapse in={expanded}>
                <Box sx={{ mt: 4, mb: 2 }}>
                    <Typography variant="body1" fontWeight="medium" sx={{ mb: 2 }}>
                        Select the options which best suited to your Outlet
                    </Typography>

                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* Outlet type checkboxes */}
                        {Object.entries(outletTypes).map(([key, value]) => (
                            <Box key={key} sx={{ width: '33%', mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox checked={value} onChange={handleOutletTypeChange} name={key} />}
                                    label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                />
                            </Box>
                        ))}

                        {showMoreOutletTypes && Object.entries(extendedOutletTypes).map(([key, value]) => (
                            <Box key={key} sx={{ width: '33%', mb: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox checked={value} onChange={handleOutletTypeChange} name={key} />}
                                    label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                />
                            </Box>
                        ))}
                    </FormGroup>

                    <Button
                        onClick={toggleMoreOutletTypes}
                        sx={{
                            color: 'primary.main',
                            mt: 1,
                            fontWeight: 'medium',
                            '&:hover': { backgroundColor: 'transparent' },
                            padding: 0
                        }}
                    >
                        {showMoreOutletTypes ? '- Show Less' : '+ Load More'}
                    </Button>
                </Box>
            </Collapse>
        </Box>
    );
};

export default EstablishmentTypeSection;