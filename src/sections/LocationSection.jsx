import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    Collapse // Add this import
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationSection = () => {
    const [viewport, setViewport] = useState({
        longitude: 83.2184815,  // Visakhapatnam longitude
        latitude: 17.6868159,   // Visakhapatnam latitude
        zoom: 13
    });

    const [markerPosition, setMarkerPosition] = useState({
        longitude: 83.2184815,
        latitude: 17.6868159
    });

    // Mapbox access token
    const MAPBOX_TOKEN = "pk.eyJ1IjoicHJvd2VzcyIsImEiOiJjbGsyYjlyNXcwZDBrM25vMWEyYWlhdGg5In0.l0V1ihozO8xQ6Uq9EoysUg";

    const [searchValue, setSearchValue] = useState('');
    const [expanded, setExpanded] = useState(true); // Add this state

    const handleMapClick = useCallback(event => {
        setMarkerPosition({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat
        });
    }, []);

    const handleDetectLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newViewport = {
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                    zoom: 16
                };
                setViewport(newViewport);
                setMarkerPosition({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                });
            }, (error) => {
                console.error("Error getting location: ", error);
                alert("Unable to retrieve your location. Please ensure location services are enabled.");
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const handleSearch = async () => {
        if (!searchValue.trim()) return;

        try {
            // Limit search to India by adding country code
            const endpoint = ' https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchValue)}.json?country=in&access_token=${MAPBOX_TOKEN}&limit=1';

            const response = await fetch(endpoint);
            const data = await response.json();

            if (data.features && data.features.length > 0) {
                const [longitude, latitude] = data.features[0].center;

                setViewport({
                    longitude,
                    latitude,
                    zoom: 15
                });
                setMarkerPosition({
                    longitude,
                    latitude
                });
            } else {
                alert("Location not found. Please try a different search term.");
            }
        } catch (error) {
            console.error("Error searching location:", error);
            alert("Failed to search for location. Please try again.");
        }
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    // Add this toggle function
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Box className="form-section">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    cursor: 'pointer' // Add cursor pointer to indicate clickable
                }}
                onClick={toggleExpanded} // Add click handler
            >
                <Typography variant="h6" fontWeight="bold">Restaurant Details</Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.3s'
                    }}
                />
            </Box>

            <Collapse in={expanded}>
                {/* Wrap the content in Collapse component */}
                <TextField
                    fullWidth
                    label="Restaurant Name"
                    variant="outlined"
                    size="small"
                />

                <TextField
                    fullWidth
                    label="Restaurant complete Address"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    sx={{ mb: 1 }}
                />

                <Typography variant="body2" color="orange" sx={{ mb: 3 }}>
                    Please ensure the address is same as the FSSAI Document
                </Typography>

                <Typography variant="body1" fontWeight="medium" sx={{ mb: 1 }}>
                    Please place the location accurately at your outlet location on the Map
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    This will help customers and delivery partners locate your store
                </Typography>

                <Box sx={{ display: 'flex', mb: 2 }}>
                    <TextField
                        label="Enter your restaurant Location"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={handleSearchKeyPress}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        size="small"
                        sx={{ flex: 1 }}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        sx={{
                            height: '40px',
                            borderRadius: '0',
                            bgcolor: '#8a8a8a',
                            '&:hover': { bgcolor: '#6b6b6b' }
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleDetectLocation}
                        sx={{
                            height: '40px',
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            width: '110px'
                        }}
                    >
                        Detect
                        <MyLocationIcon sx={{ ml: 1 }} />
                    </Button>
                </Box>

                <Box
                    sx={{
                        height: 400,
                        borderRadius: 1,
                        mb: 3,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Map
                        {...viewport}
                        mapboxAccessToken={MAPBOX_TOKEN}
                        style={{ width: '100%', height: '100%' }}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        onMove={evt => setViewport(evt.viewState)}
                        onClick={handleMapClick}
                    >
                        <Marker
                            longitude={markerPosition.longitude}
                            latitude={markerPosition.latitude}
                            anchor="bottom"
                            draggable
                            onDragEnd={(event) => {
                                setMarkerPosition({
                                    longitude: event.lngLat.lng,
                                    latitude: event.lngLat.lat
                                });
                            }}
                        >
                            <Box sx={{ color: 'red', fontSize: 40 }}>📍</Box>
                        </Marker>
                    </Map>

                    <Box sx={{ position: 'absolute', bottom: 10, right: 10, zIndex: 1 }}>
                        <Typography variant="body2" sx={{ bgcolor: 'white', p: 1, borderRadius: 1, boxShadow: 1 }}>
                            Lat: {markerPosition.latitude.toFixed(6)}, Lng: {markerPosition.longitude.toFixed(6)}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            // Reset to Visakhapatnam
                            setViewport({
                                longitude: 83.2184815,
                                latitude: 17.6868159,
                                zoom: 13
                            });
                            setMarkerPosition({
                                longitude: 83.2184815,
                                latitude: 17.6868159
                            });
                        }}
                    >
                        Reset to Visakhapatnam
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={() => {
                            console.log("Selected location:", markerPosition);
                            // CAN BE ADDED: save this data to your form state
                            alert(`Location selected: ${markerPosition.latitude.toFixed(6)}, ${markerPosition.longitude.toFixed(6)}`);

                        }}
                    >
                        Confirm Location
                    </Button>
                </Box>
            </Collapse>
        </Box>
    );
};

export default LocationSection;