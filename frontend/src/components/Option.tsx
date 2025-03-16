// components/Option.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export interface OptionProps {
    precondition: string;
    description: string;
    link: string;
}

const Option: React.FC<OptionProps> = ({ precondition, description, link }) => {
    return (
        <Card variant="outlined" sx={{ mb: 1 }}>
            <CardContent>
                <Typography variant="subtitle2">Precondition:</Typography>
                <Typography variant="body1">{precondition}</Typography>
                <Typography variant="subtitle2" mt={1}>Description:</Typography>
                <Typography variant="body1">{description}</Typography>
                <Typography variant="subtitle2" mt={1}>Link ID:</Typography>
                <Typography variant="body1">{link}</Typography>
            </CardContent>
        </Card>
    );
};

export default Option;
