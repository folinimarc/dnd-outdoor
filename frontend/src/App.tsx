// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllLocations, { LocationData } from './components/AllLocations';
import LocationDetail from './components/LocationDetail'; // This component will display details for a single location

const locationsData: LocationData[] = [
    { id: 1, title: 'Tempel', description: 'Ein Tempel der die alten Essiggurken-Götter verehrt. ' },
    { id: 2, title: 'Egons Hütte', description: 'Eine schäbige Hütte mit einem Zwerg namens Egon davor.' },
    // add more locations as needed
];

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllLocations locations={locationsData} />} />
                <Route path="/locations/:id" element={<LocationDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
