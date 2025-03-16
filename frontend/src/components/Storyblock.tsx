// components/Storyblock.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Option, { OptionProps } from './Option';

export interface StoryblockProps {
    id: string;
    description: string;
    applyEffects: string;
    options: OptionProps[];
}

const Storyblock: React.FC<StoryblockProps> = ({ id, description, applyEffects, options }) => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent>
        <Typography variant="h6">Storyblock ID: {id}</Typography>
    <Typography variant="body1" mt={1}>Description: {description}</Typography>
    <Typography variant="body1" mt={1}>Apply Effects: {applyEffects}</Typography>
    <Box mt={2}>
    <Typography variant="subtitle1">Options:</Typography>
    {options.map((option, index) => (
        <Option
            key={index}
        precondition={option.precondition}
        description={option.description}
        link={option.link}
        />
    ))}
    </Box>
    </CardContent>
    </Card>
);
};

export default Storyblock;
