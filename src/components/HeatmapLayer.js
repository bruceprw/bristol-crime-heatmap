import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';

const HeatmapLayer = ({ points }) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const heatLayer = L.heatLayer(points, {
            radius: 25,
            maxOpacity: 0.8,
            blur: 15,
            gradient: {
                0.4: 'blue',
                0.6: 'lime',
                0.7: 'yellow',
                1.0: 'red'
            }
        }).addTo(map);

        return () => {
            map.removeLayer(heatLayer);
        };
    }, [map, points]);

    return null;
};

export default HeatmapLayer;