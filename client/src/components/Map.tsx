import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
interface MapComponentProps {
    apiKey: string;
    shopLocation: {
      latitude: number;
      longitude: number;
    };
  }
  
const Map: React.FC<MapComponentProps> = ({ apiKey, shopLocation }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: shopLocation.latitude,
    lng: shopLocation.longitude,
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={17}/>
    </LoadScript>
  );
};

export default Map;
