"use client";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

interface GoogleMapComponentProps {
  lat: number; // Latitude
  lng: number; // Longitude
}

const GoogleMapComponent = ({ lat, lng }: GoogleMapComponentProps) => {
  const center = {
    lat,
    lng,
  };

  // Access the environment variable
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!googleMapsApiKey) {
    console.error(
      "Google Maps API key is missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env.local file.",
    );
    return null; // Optionally render nothing or an error message
  }

  return (
    <LoadScriptNext googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        {/* Add a marker at the center */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default GoogleMapComponent;
