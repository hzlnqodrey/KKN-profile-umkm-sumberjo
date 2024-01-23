// MAP
// GOOGLE MAP API:
// AIzaSyB8VFULsnTm8pnNuakeHs0psWAymG7GBr4

import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "500px",
};

const OPTIONS = {
  minZoom: -2,
  maxZoom: -4,
}

const center = {
  lat: -7.773725986480713,
  lng: 110.13545227050781,
  zoom: 15
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB8VFULsnTm8pnNuakeHs0psWAymG7GBr4",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(center.zoom)

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={-20}
      onLoad={onLoad}
      onUnmount={onUnmount}
      className="h-48 w-96 max-w-sm mb-10 object-contain"
      options = {OPTIONS}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
