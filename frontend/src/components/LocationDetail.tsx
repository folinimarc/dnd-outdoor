// components/LocationDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Divider } from '@mui/material';
import Storyblock, { StoryblockProps } from './Storyblock';

// Sample data for demonstration purposes
const storyblocksData: StoryblockProps[] = [
    {
        id: "1",
        description: "Er würkt pisst",
        applyEffects: "-",
        options: [
            { precondition: "-", description: "Ich schwör I ging di", link: "10" },
            { precondition: "charakter.blume >= 1", description: "Gib ihm e blueme", link: "2" },
        ],
    },
    {
        id: "2",
        description: "Du hesch ihm grad e Blueme geh.",
        applyEffects: "charakter.blume -= 1",
        options: [
            { precondition: "Class = Bard", description: "Du verführsch de Zwerg", link: "20" },
        ],
    },
];

const LocationDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                Location Detail
            </Typography>
            <Divider />
            <Typography variant="body1" mb={2}>
                Details for location with ID: {id}
            </Typography>
            {storyblocksData.map((storyblock) => (
                <Storyblock
                    key={storyblock.id}
                    id={storyblock.id}
                    description={storyblock.description}
                    applyEffects={storyblock.applyEffects}
                    options={storyblock.options}
                />
            ))}
        </Box>
    );
};

export default LocationDetail;
