import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
interface MapComponentProps {
  apiKey: string;
  shopLocation: {
    latitude: number;
    longitude: number;
  };
}

const Map: React.FC<MapComponentProps> = ({ apiKey, shopLocation }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: shopLocation.latitude,
    lng: shopLocation.longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  return isLoaded ? (
    // <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        {shopLocation && <Marker position={center} />}
      </GoogleMap>
    // </LoadScript>
  ) : <></>;
};

export default Map;
