import { StyleSheet, PermissionsAndroid, View } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useContext } from "react";
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { PropsThemeContext } from '../context/SisturMapsContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapComponent = ({ navigation }) => {

  const { locations, setLocation } = useContext(PropsThemeContext);

  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchID, setWatchID] = useState(0);

  function callLocation() {
    const requestLocationPermission = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão de Acesso à Localização",
          message: "Este aplicativo precisa acessar sua localização.",
          buttonNeutral: "Pergunte-me depois",
          buttonNegative: "Cancelar",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        console.log('Permissão de Localização negada');
      }
    };
    requestLocationPermission();
  }

  function getLocation() {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLatitudeX = JSON.stringify(position.coords.latitude);
        const currentLongitudeX = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(currentLatitudeX);
        setCurrentLongitude(currentLongitudeX);
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    const watchID = Geolocation.watchPosition((position) => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLatitude(currentLatitude);
      setCurrentLongitude(currentLongitude);
    });
    setWatchID(watchID);
  }

  const clearLocation = () => {
    Geolocation.clearWatch(watchID);
  }

  function setMarkerWithNativeEventClick(nativeEvent) {
    let latitude = nativeEvent.coordinate.latitude;
    let longitude = nativeEvent.coordinate.longitude;
    let locate = { latitude, longitude };
    setLocation(locate);
  }
  const wasCalled = useRef(false);

  useEffect(() => {
    if (wasCalled.current) {
      return;
    } else {
      wasCalled.current = true
      callLocation()
      console.log("oi")
    }
  });

  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        onPress={(e) => setMarkerWithNativeEventClick(e.nativeEvent)}
        loadingEnabled={true}
        region={{
          latitude: Number(currentLatitude),
          longitude: Number(currentLongitude),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {

          locations.map((key, value) => (
            <Marker
              key={key}
              calloutAnchor={{
                x: 2.9,
                y: 0.8,
              }}
              coordinate={{
                latitude: key.latitude,
                longitude: key.longitude,
              }}
            >
            </Marker>
          ))
        }

      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%'
  }
});

export default MapComponent;