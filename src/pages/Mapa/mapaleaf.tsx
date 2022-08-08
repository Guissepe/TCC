import { ExpoLeaflet } from 'expo-leaflet';
import * as Location from 'expo-location';
import { LatLngLiteral, Marker } from 'leaflet';
import React, { useEffect, useState } from 'react';
import Slider from './Configs';
import 'react-modern-drawer/dist/index.css';

// import { Button } from './styles'
import {
  ActivityIndicator,
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'
import { MapLayer } from 'expo-leaflet'
import { mapMarkers, mapShapes } from './mockData'
// import { useNavigation } from '@react-navigation/native'
// import { RootStackParamList } from 'routes/types';
// import NativeStackNavigationProp from '@react-navigation/native-stack';


const mapLayers: Array<MapLayer> = [
  {
    attribution:
      '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    baseLayerIsChecked: true,
    baseLayerName: 'OpenStreetMap',
    layerType: 'TileLayer',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    baseLayerIsChecked: true,
    baseLayer: true,
    baseLayerName: 'Mapbox',
    layerType: 'TileLayer',
    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2hlcmVzbXl3YXZlcyIsImEiOiJjanJ6cGZtd24xYmU0M3lxcmVhMDR2dWlqIn0.QQSWbd-riqn1U5ppmyQjRw`,
  },
]

const mapOptions = {
  attributionControl: false,
  zoomControl: Platform.OS === 'web',
}

const initialPosition = {
  lat: -25.74922656712633,
  lng: -53.06181907653809
}

const styles = StyleSheet.create({
  searchbox:{
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    position: 'absolute',
    top: '10%',
    right: '7%',
  },
  search: {
    backgroundColor: '#ffffff',
    flex: 0.1,
    width: '90%',
    height: '8vw',
    borderRadius: 20,

  },
  container: {
    flex: 1,
    backgroundColor: '#050505',
    position: 'relative',
  },
  header: {
    height: 60,
    backgroundColor: 'dodgerblue',
    paddingHorizontal: 10,
    paddingTop: 30,
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  mapControls: {
    backgroundColor: 'rgba(255,255,255,.5)',
    borderRadius: 5,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    marginHorizontal: 10,
    padding: 7,
    right: 0,

  },
  mapButton: {
    alignItems: 'center',
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  mapButtonEmoji: {
    fontSize: 28,
  },
})

function Map() {
  const [zoom, setZoom] = useState(14)
  const [mapCenterPosition, setMapCenterPosition] = useState(initialPosition)
  const [ownPosition, setOwnPosition] = useState<null | LatLngLiteral>(null)

  useEffect(() => {
    const getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.warn('Permission to access location was denied')
      }

      let location = await Location.getCurrentPositionAsync({})
      if (!ownPosition) {
        setOwnPosition({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        })
      }
    }

    getLocationAsync().catch((error) => {
      console.error(error)
    })
  }, [])


{/* <NativeStacknavigationProp<RootStackParamList>> */}



  return (

    <SafeAreaView style={styles.container}>

      <View style={{ flex: 1, position: 'relative' }}>

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
              case 'onMapMarkerClicked':
                Alert.alert(
                  `Map Marker Touched, ID: ${message.mapMarkerId || 'unknown'}`,
                )
                break
              case 'onMapClicked':
                Alert.alert(
                  `Map Touched at:`,
                  `${message.location.lat}, ${message.location.lng}`,
                )
                break
              case 'onMoveEnd':
                setMapCenterPosition(message.mapCenter)
                break
              case 'onZoomEnd':
                setZoom(message.zoom)
                break
              default:
                if (['onMove'].includes(message.tag)) {
                  return
                }
                console.log(message)
            }
          }}
          zoom={zoom}
        />
      </View>
      <Button
        onPress={() => {
          setMapCenterPosition(initialPosition)
          setZoom(14)
        }}
        title="Reset Map"
      />
      <View style={styles.searchbox}>
        <Slider/>
      </View>


    </SafeAreaView>
  )
}

export default Map;






// {lat: -25.74936185614262, lng: -53.052849769592285},
//         {lat: -25.748588633834604, lng: -53.052492103915796},
//         {lat: -25.748298866864353, lng: -53.0555641651123},
//         {lat: -25.749313538654487, lng: -53.06108951568604},
//         {lat: -25.74928454815217, lng: -53.06111097335816},
//         {lat: -25.745187152664922, lng: -53.062033653259284},
//         {lat: -25.738248316362302, lng: -53.06370735168458},
//         {lat: -25.736354078953365, lng: -53.05349349975587},
//         {lat: -25.73634441439938, lng: -53.05250644683838},
//         {lat: -25.73829663835028, lng: -53.052034378051765},
//         {lat: -25.739968567034165, lng: -53.06053161621094},
//         {lat: -25.742577888498243, lng: -53.05995225906373},
//         {lat: -25.742249310430076, lng: -53.05713057518006} help meeeeeeeew,
//         {lat: -25.74242326363417, lng: -53.05707693099976},

//     return (

//         </Marker>
//         <Marker position={[ -25.75433845215439,-53.07014748529735]}></Marker>
//         <Marker position={[-25.74242326363417, -53.05707693099976]}></Marker>
//         <Marker position={[-25.752744252179628, -53.058065781908915]}></Marker>
//         <Marker position={[ -25.752744252179628, -53.058065781908915]}></Marker>
//         <Marker position={[-25.752744252179628, -53.058065781908915]}></Marker>
//         <Marker position={[-25.752715055574416, -53.05791027244841]}></Marker>
//         <Marker position={[-25.751502314836518, -53.05772264380956]}></Marker>
//         <Marker position={[-25.75143467156226, -53.057765530355574]}></Marker>
//         <Marker position={[-25.750685761308624, -53.05383605057636]}></Marker>
//         <Marker position={[-25.75078239515508, -53.05380388566684]}></Marker>
//         <Marker position={[-25.74934252914973, -53.0517339706421]}></Marker>
//         <Marker position={[-25.743737568535213, -53.068492412567146]}></Marker>
//         <Marker position={[-25.733821938942054, -53.07111024856568]}></Marker>
//         <Marker position={[-25.73130907492065, -53.07512283325196]}></Marker>
//         <Marker position={[-25.728583523896933, -53.061497211456306]}></Marker>
//         <Marker position={[-25.733705961771808, -53.05866479873658]}></Marker>


// export default Mapa
