import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { fetchCrimes } from '../api/policeData';
import HeatmapLayer from './HeatmapLayer';
import CrimeFilter from './CrimeFilter';
import L from 'leaflet';

const BristolCenter = [51.4545, -2.5879]; // Bristol coordinates
const maxZoomLevel = 17; // The zoom level where we swap heatmap for clickable markers

const ZoomHandler = ({ setZoomLevel }) => {
    useMapEvents({
        zoomend: (event) => {
            setZoomLevel(event.target.getZoom());
        },
    });
    return null;
};

const categories = [
    'anti-social-behaviour',
    'bicycle-theft',
    'burglary',
    'criminal-damage-arson',
    'drugs',
    'other-theft',
    'possession-of-weapons',
    'public-order',
    'robbery',
    'shoplifting',
    'theft-from-the-person',
    'vehicle-crime',
    'violent-crime',
    'other-crime'
];

const CrimeMap = ({ date }) => {
    const [crimes, setCrimes] = useState([]);
    const [filteredCrimes, setFilteredCrimes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [zoomLevel, setZoomLevel] = useState(13);

    useEffect(() => {
        const getCrimes = async () => {
            const data = await fetchCrimes(date);
            setCrimes(data);
            setFilteredCrimes(data);
        };
        getCrimes();
    }, [date]);

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredCrimes(crimes);
        } else {
            const filtered = crimes.filter(crime => selectedCategories.includes(crime.category));
            setFilteredCrimes(filtered);
        }
    }, [selectedCategories, crimes]);

    const calculateIntensity = () => {
        return filteredCrimes.map(crime => [
            parseFloat(crime.location.latitude),
            parseFloat(crime.location.longitude),
            0.5 // Fixed intensity value to ensure visibility
        ]);
    };

    const heatMapPoints = calculateIntensity();

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => {
            if (prev.includes(category)) {
                return prev.filter(cat => cat !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const handleSelectAll = () => {
        setSelectedCategories(categories);
    };

    const handleDeselectAll = () => {
        setSelectedCategories([]);
    };

    return (
        <div className="w-full h-full">

            <MapContainer center={BristolCenter} zoom={13} className="w-full h-96 rounded-lg shadow-lg">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <ZoomHandler setZoomLevel={setZoomLevel} />
                {zoomLevel < maxZoomLevel ? (
                    heatMapPoints.length > 0 && <HeatmapLayer points={heatMapPoints} />
                ) : (
                    filteredCrimes.map(crime => (
                        <Marker
                            key={crime.id}
                            position={[parseFloat(crime.location.latitude), parseFloat(crime.location.longitude)]}
                            icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', iconSize: [25, 41], iconAnchor: [12, 41] })}
                        >
                            <Popup>
                                <div>
                                    <h2>{crime.category}</h2>
                                    <p><strong>Location:</strong> {crime.location.street.name}</p>
                                    <p><strong>Outcome:</strong> {crime.outcome_status ? crime.outcome_status.category : 'Unknown'}</p>
                                    <p><strong>Date:</strong> {crime.month}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                )}
            </MapContainer>
            <CrimeFilter
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                onSelectAll={handleSelectAll}
                onDeselectAll={handleDeselectAll}
            />
        </div>
    );
};

export default CrimeMap;