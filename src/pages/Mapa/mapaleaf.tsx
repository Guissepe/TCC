import { ExpoLeaflet, MapLayer } from "expo-leaflet";
import {
  ActivityIndicator,
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Location from "expo-location";
import { LatLngLiteral, polyline } from "leaflet";
import React, { useEffect, useState } from "react";
import "react-modern-drawer/dist/index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import i18n from "i18n-js";
import { Marker } from "react-leaflet";
import { mapMarkers, mapShapes } from "./mockData";
import FlatListDropDown from "./droptdown";
import Slider from "./Configs";
import { Header, Addbutton, Slidescreen, AddChanges } from "./styles";

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
  lat: -25.74922656712633,
  lng: -53.06181907653809,
};

const styles = StyleSheet.create({
  searchbox: {
    borderRadius: 4,
    position: "absolute",
    top: "15%",
    right: "10%",
    display: "flex",
    alignSelf: "center",
  },
  search: {
    backgroundColor: "#ffffff",
    flex: 0.2,
    width: "90%",
    height: "8vw",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#050505",
    position: "relative",
  },
  header: {
    height: 60,
    backgroundColor: "dodgerblue",
    paddingHorizontal: 10,
    paddingTop: 30,
    width: "100%",
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
    margin: 0,
  },
  mapButtonEmoji: {
    fontSize: 28,
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcfdff",
    margin: 1,
    width: 30,
    height: 33,
    left: "-500%",
    top: -70,
  },
  buttonImage: {
    padding: 7,
    height: 20,
    width: "70%",
    left: "20%",
  },
  buttonPesquise: {
    margin: 1,
  },
  engrenagem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcfdff",
    margin: 1,
    width: 30,
    height: 33,
    left: "-991%",
    top: -65,
  },
  imgengrenagem: {
    padding: 7,
    height: 20,
    width: "70%",
    left: "20%",
  },
  estrela: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcfdff",
    margin: 1,
    width: 30,
    height: 33,
    left: "-20%",
    top: -70,
  },
  imgestrela: {
    padding: 7,
    height: 20,
    width: "70%",
    left: "10%",
  },
});

function Map() {
  const [zoom, setZoom] = useState(14);
  const [mapCenterPosition, setMapCenterPosition] = useState(initialPosition);
  const [ownPosition, setOwnPosition] = useState<null | LatLngLiteral>(null);
  const MinimaIdeia = () => {
    console.log("cliquei");
  };

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

  const [isActive, setSlider] = useState(false);

  const Defined = () => {
    setSlider((current) => !current);
  };

  {
    /* <NativeStacknavigationProp<RootStackParamList>> */
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>expo-leaflet</Text>
      </View> */}

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
          setZoom(14);
        }}
        title="Reset Map"
      />
      <View style={styles.searchjunior}>
        <Bora />
      </View>
      <View style={styles.searchbox}>
        <TouchableOpacity style={styles.buttonStyle} onPress={Defined}>
          <Image
            source={require("./image/lupa.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <View>
          <View style={{ display: isActive ? "block" : "none" }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <Slidescreen>
                  <FlatListDropDown />
                  <AddChanges onPress={() => handleSubmit()} />
                </Slidescreen>
              )}
            </Formik>
          </View>
          <View />
        </View>
        <View>
          <TouchableOpacity style={styles.engrenagem}>
            <Image
              source={require("./image/engrenagem.png")}
              style={styles.imgengrenagem}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.estrela}>
            <Image
              source={require("./image/estrela.png")}
              style={styles.imgestrela}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Map;
