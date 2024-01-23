// // MAP
// // GOOGLE MAP API:
// // AIzaSyB8VFULsnTm8pnNuakeHs0psWAymG7GBr4

// // DUSUN SUMBERJO KOORDINAT
// // latitude: -7.7746623 | langitude: 110.1364073

// import React from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "300px",
//   height: "500px",
// };

// const OPTIONS = {
//   minZoom: -2,
//   maxZoom: -4,
// }

// const center = {
//   lat: -7.7746623,
//   lng: 110.1364073,
//   zoom: 17
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyB8VFULsnTm8pnNuakeHs0psWAymG7GBr4",
//   });

//   const [mapRef, setMapRef] = React.useState();

//   const markers = [
//     { lat: -7.7746623, lng: 110.1364073 },
//   ];

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     map.setZoom(center.zoom)
//     markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//     setMapRef(map);

//     setMap(map);
//   }, []);

//   const handleMarkerClick = (lat, lng) => {
//     mapRef?.setZoom(15);
//     mapRef?.panTo({ lat, lng });
//   };

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={-20}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//       className="h-48 w-96 max-w-sm mb-10 object-contain"
//       options = {OPTIONS}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       {markers.map(({ lat, lng }) => (
//         <Marker
//           onClick={() => {
//             handleMarkerClick(lat, lng);
//           }}
//           position={{ lat, lng }}
//         />
//       ))}
//       <></>


//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MyComponent);
