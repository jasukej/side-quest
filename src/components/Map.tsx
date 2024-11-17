import React from 'react'
import { Map, useMap } from '@vis.gl/react-google-maps';

function VancMap() {
    const map = useMap();

    React.useEffect(() => {
        if (map) {
            map.setOptions({
                styles: [
                    {
                        elementType: 'geometry',
                        stylers: [{ color: '#f5f5f5' }],
                    },
                    {
                        elementType: 'labels.icon',
                        stylers: [{ visibility: 'off' }],
                    },
                    {
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#616161' }],
                    },
                    {
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#f5f5f5' }],
                    },
                    {
                        featureType: 'administrative.land_parcel',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#bdbdbd' }],
                    },
                    {
                        featureType: 'poi',
                        elementType: 'geometry',
                        stylers: [{ color: '#eeeeee' }],
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#757575' }],
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#e5e5e5' }],
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9e9e9e' }],
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#ffffff' }],
                    },
                    {
                        featureType: 'road.arterial',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#757575' }],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#dadada' }],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#616161' }],
                    },
                    {
                        featureType: 'road.local',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9e9e9e' }],
                    },
                    {
                        featureType: 'transit.line',
                        elementType: 'geometry',
                        stylers: [{ color: '#e5e5e5' }],
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'geometry',
                        stylers: [{ color: '#eeeeee' }],
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#c9c9c9' }],
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9e9e9e' }],
                    },
                ],
                mapTypeId: 'satellite',
            });
        }
    }, [map]);

    return <div style={{ width: '100vw', height: '100vh', filter: 'grayscale(100%) brightness(50%)' }}>
        <Map
            defaultZoom={17}
            defaultCenter={{ lat: 49.281282350356186, lng: -123.10014107629969 }}
        />
    </div>;
}
export default VancMap;