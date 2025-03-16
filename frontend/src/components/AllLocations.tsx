// components/AllLocations.tsx
import React from 'react';
import {Typography, Box, Divider, Card, CardContent} from '@mui/material';
import Location from './Location';

export interface LocationData {
    id: number;
    title: string;
    description: string;
}

interface AllLocationsProps {
    locations: LocationData[];
}

const AllLocations: React.FC<AllLocationsProps> = ({locations}) => {
    return (
        <Box p={2}>
            <Typography variant="h4" component="h1" gutterBottom>
                All Locations
            </Typography>
            <Divider></Divider>
            <Box>
                {locations.map((loc) => (
                    <Card key={loc.id} sx={{m:2}}>
                        <CardContent>
                            <Location
                                key={loc.id}
                                id={loc.id}
                                title={loc.title}
                                description={loc.description}
                            />
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default AllLocations;
