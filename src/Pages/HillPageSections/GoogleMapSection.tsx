import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import classes from "./GooglemapSection.module.css";
import markerIcon from "../../assest/icons/location_icon.png";
import Skeleton from "react-loading-skeleton";

interface GoogleMapSectionProps {
  latitude: number;
  longitude: number;
  hillId: number;
}

const GoogleMapSection: React.FC<GoogleMapSectionProps> = ({
  latitude,
  longitude,
  hillId,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
    language: "he",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markerSize, setMarkerSize] = useState<google.maps.Size | null>(null);

  useEffect(() => {
    // Reset the map when coordinates change
    setMap(null);
  }, [latitude, longitude]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return (
      <div className={classes.googleMapSection}>
        <Skeleton height={"100%"} />
      </div>
    );
  }

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

  return (
    <div className={classes.googleMapSection} key={hillId}>
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
      />
    </div>
  );
};

export default GoogleMapSection;
