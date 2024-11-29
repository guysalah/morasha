import { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import classes from "./GooglemapSection.module.css";
import markerIcon from "../../assest/icons/location_icon.png";

interface GoogleMapSectionProps {
  latitude: number;
  longitude: number;
  hillId: number;
}

const isGoogleLoaded = (): boolean => {
  return typeof google !== 'undefined';
};

const GoogleMapSection: React.FC<GoogleMapSectionProps> = ({
  latitude,
  longitude,
  hillId,
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markerSize, setMarkerSize] = useState<google.maps.Size | null>(null);

  useEffect(() => {
    // Reset the map when coordinates change
    setMap(null);
    // // Create new marker size if needed
    // if (!markerSize) {
    //   setMarkerSize(new google.maps.Size(40, 40));
    // }
  }, [latitude, longitude]); // Remove map from dependencies

  const mapStyles = {
    height: "450px",
    width: "100%",
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };
  const defaultMapStyles = [
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
  ];

  const onLoad = (map: google.maps.Map): void => {
    const marker = new google.maps.Marker({
      map: map,
      position: { lat: latitude, lng: longitude },
      icon: {
        url: markerIcon,
        scaledSize: markerSize || undefined,
      },
    });
    map.setCenter({ lat: latitude, lng: longitude });
    setMap(map);
  };

  const onUnmount = (): void => {
    setMap(null);
  };

  const mapComponent = (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={15}
      center={defaultCenter}
      options={{
        styles: defaultMapStyles,
        zoomControl: true,
        streetViewControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
      }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  );

  return (
    <div className={classes.googleMapSection} key={hillId}>
      {isGoogleLoaded() ? (
        mapComponent
      ) : (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""} language="he">
          {mapComponent}
        </LoadScript>
      )}
    </div>
  );
};

export default GoogleMapSection;
