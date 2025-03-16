// components/Location.tsx
import React from 'react';
import {Card, CardContent, Typography, Box, Divider} from '@mui/material';
import { Link } from 'react-router-dom';

export interface LocationProps {
    id: number;
    title: string;
    description: string;
}

const Location: React.FC<LocationProps> = ({ id, title, description }) => {
    return (
        <Card
            component={Link}
            to={`/locations/${id}`}
            sx={{ textDecoration: 'none', mb: 2 }} // remove underline and add spacing between cards
        >
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Location;
