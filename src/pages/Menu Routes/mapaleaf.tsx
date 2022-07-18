import { ExpoLeaflet, MapLayer } from "expo-leaflet";
import * as Location from "expo-location";
import type { LatLngLiteral } from "leaflet";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { mapMarkers, mapShapes } from "./mockData";

const mapLayers: Array<MapLayer> = [
  {
    attribution:
      '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    baseLayerIsChecked: true,
    baseLayerName: "OpenStreetMap",
    layerType: "TileLayer",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    baseLayerIsChecked: true,
    baseLayer: true,
    baseLayerName: "Mapbox",
    layerType: "TileLayer",
    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2hlcmVzbXl3YXZlcyIsImEiOiJjanJ6cGZtd24xYmU0M3lxcmVhMDR2dWlqIn0.QQSWbd-riqn1U5ppmyQjRw`,
  },
];

const mapOptions = {
  attributionControl: false,
  zoomControl: Platform.OS === "web",
};

const initialPosition = {
  lat: -25.74936185614262,
  lng: -53.052849769592285,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    height: 10000,
  },
  header: {
    height: 50,
    backgroundColor: "dodgerblue",
    paddingHorizontal: 1,
    paddingTop: 1,
    width: "100%",
    borderRadius: 16,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  mapControls: {
    backgroundColor: "rgba(255,255,255,.5)",
    borderRadius: 5,
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    marginHorizontal: 10,
    padding: 7,
    right: 0,
  },
  mapButton: {
    alignItems: "center",
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  mapButtonEmoji: {
    fontSize: 28,
  },
});

function Map() {
  const [zoom, setZoom] = useState(7);
  const [mapCenterPosition, setMapCenterPosition] = useState(initialPosition);
  const [ownPosition, setOwnPosition] = useState<null | LatLngLiteral>(null);

  useEffect(() => {
    const getLocationAsync = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
      }

      const location = await Location.getCurrentPositionAsync({});
      if (!ownPosition) {
        setOwnPosition({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      }
    };

    getLocationAsync().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput placeholder="Destino" style={{ backgroundColor: "white" }} />
      </View>
      <View style={{ flex: 1, position: "relative" }}>
        <ExpoLeaflet
          loadingIndicator={() => <ActivityIndicator />}
          mapCenterPosition={mapCenterPosition}
          mapLayers={mapLayers}
          mapMarkers={mapMarkers}
          mapOptions={mapOptions}
          mapShapes={mapShapes}
          maxZoom={20}
          onMessage={(message) => {
            switch (message.tag) {
              case "onMapMarkerClicked":
                Alert.alert(
                  `Map Marker Touched, ID: ${message.mapMarkerId || "unknown"}`
                );
                break;
              case "onMapClicked":
                Alert.alert(
                  `Map Touched at:`,
                  `${message.location.lat}, ${message.location.lng}`
                );
                break;
              case "onMoveEnd":
                setMapCenterPosition(message.mapCenter);
                break;
              case "onZoomEnd":
                setZoom(message.zoom);
                break;
              default:
                if (["onMove"].includes(message.tag)) {
                  return;
                }
                console.log(message);
            }
          }}
          zoom={zoom}
        />
      </View>
      <Button
        onPress={() => {
          setMapCenterPosition(initialPosition);
          setZoom(7);
        }}
        title="Reset Map"
      />
    </SafeAreaView>
  );
}

export default Map;

// import { ExpoLeaflet, MapLayer } from "expo-leaflet";
// import * as Location from "expo-location";
// import type { LatLngLiteral } from "leaflet";
// import React, { useEffect, useState } from "react";
// import {
// ActivityIndicator,
// Alert,
//  Button,
//  Platform,
//  SafeAreaView,
//  StyleSheet,
//  Text,
//  View,
// } from "react-native";
// import { TextInput } from "react-native-gesture-handler";

// import { mapMarkers, mapShapes } from "./mockData";

// const mapLayers: Array<MapLayer> = [
// {
//    attribution:
//      '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//    baseLayerIsChecked: true,
//    baseLayerName: "OpenStreetMap",
//    layerType: "TileLayer",
//    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//  },
//  {
//    baseLayerIsChecked: true,
//    baseLayer: true,
//    baseLayerName: "Mapbox",
//    layerType: "TileLayer",
//    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2hlcmVzbXl3YXZlcyIsImEiOiJjanJ6cGZtd24xYmU0M3lxcmVhMDR2dWlqIn0.QQSWbd-riqn1U5ppmyQjRw`,
//  },
// ];

// const mapOptions = {
//  attributionControl: false,
//  zoomControl: Platform.OS === "web",
// };

// const initialPosition = {
//  lat: -25.74936185614262,
//  lng: -53.052849769592285,
// };

// const styles = StyleSheet.create({
//  container: {
//   flex: 1,
//    backgroundColor: "#212c35",
//    height: 10000,
//    width: 840,
//    left: 500,
//  },
//  header: {
//    left: -500,
//    height: 80,
//  backgroundColor: "dodgerblue",
//    paddingHorizontal: 40,
//    paddingTop: 1,
//    width: "50%",
//  },
//  destino: {
//    height: -30,
//    left: -503,
//    hight: 1,
//    margin: 0,
//    color: '#313d4f',
//    background: '#192737',
//    borderColor: '#313d4f',
//    borderRadius: 10,
//    fontSize: 18,
//    padding: 8,
//  },
//  headerInput: {
//    color: "white",
//    fontSize: 18,
//    fontWeight: "200",
//  },
//  mapControls: {
//    backgroundColor: "rgba(255,255,255,.5)",
//    borderRadius: 5,
//    bottom: 25,
//    flexDirection: "row",
//   justifyContent: "space-between",
//    left: 0,
//    marginHorizontal: 10,
//    padding: 7,
//    right: 0,
//  },
//  mapButton: {
//    alignItems: "center",
//    height: 42,
//    justifyContent: "center",
//    width: 42,
//  },
//  mapButtonEmoji: {
//    fontSize: 28,
//  },
// });

// function Map() {
//  const [zoom, setZoom] = useState(7);
//  const [mapCenterPosition, setMapCenterPosition] = useState(initialPosition);
//  const [ownPosition, setOwnPosition] = useState<null | LatLngLiteral>(null);

//  useEffect(() => {
//    const getLocationAsync = async () => {
//      const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//        console.warn("Permission to access location was denied");
//      }

//      const location = await Location.getCurrentPositionAsync({});
//      if (!ownPosition) {
//       setOwnPosition({
//          lat: location.coords.latitude,
//         lng: location.coords.longitude,
//       });
//     }
//    };

//    getLocationAsync().catch((error) => {
//     console.error(error);
//    });
//  }, []);

//  return (
//    <SafeAreaView style={styles.container}>
//      <View style={styles.header}>
//        <Text>Escolha seu destino</Text>
//        <TextInput placeholder="Destino" />
//      </View>
//      <View style={{ flex: 1, position: "relative" }}>
//        <ExpoLeaflet
//          loadingIndicator={() => <ActivityIndicator />}
//         mapCenterPosition={mapCenterPosition}
//         mapLayers={mapLayers}
//          mapMarkers={mapMarkers}
//         mapOptions={mapOptions}
//          mapShapes={mapShapes}
//          maxZoom={20}
//          onMessage={(message) => {
//            switch (message.tag) {
//             case "onMapMarkerClicked":
//                Alert.alert(
//                 `Map Marker Touched, ID: ${message.mapMarkerId || "unknown"}`
//               );
//               break;
//             case "onMapClicked":
//               Alert.alert(
//                 `Map Touched at:`,
//                 `${message.location.lat}, ${message.location.lng}`
//               );
//                break;
//              case "onMoveEnd":
//               setMapCenterPosition(message.mapCenter);
//               break;
//              case "onZoomEnd":
//               setZoom(message.zoom);
//               break;
//              default:
//               if (["onMove"].includes(message.tag)) {
//                 return;
//                }
//                console.log(message);
//           }
//          }}
/// /         zoom={zoom}
//       />
/// /      </View>
//      <Button
//        onPress={() => {
//          setMapCenterPosition(initialPosition);
//          setZoom(7);
//       }}
//        title="Sua posição"
//      />
//    </SafeAreaView>
/// /  );
// }

// export default Map;
