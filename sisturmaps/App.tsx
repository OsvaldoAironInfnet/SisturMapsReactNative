/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { PropsProvider } from './context/SisturMapsContext';
import MapComponent from './components/MapComponent';
import AddMarkerComponent from './components/AddMarkerComponent';
import ListMarkerComponent from './components/ListMarkerComponent';
import DetailMarkerComponent from './components/DetailMarkerComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const FirstScreenStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={MapComponent}
        />
      </Stack.Navigator>
    );
  }

  const SecondScreenStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Criar Marcador"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Criar Marcador"
          component={AddMarkerComponent}
        />
      </Stack.Navigator>
    );
  }

  const ThreeScreenStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Exibir Geolocalizações"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Exibir Geolocalizações"
          component={ListMarkerComponent}
        />
      </Stack.Navigator>
    );
  }

  const FourScreenStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Exibir Geolocalizações"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Detalhe Geolocalização"
          component={DetailMarkerComponent}
        />
      </Stack.Navigator>
    );
  }

  return (
    <PropsProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: 250,
            },
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}>
          <Drawer.Screen
            name="Home"
            options={{
              drawerLabel: 'SisturApp',
              title: 'SisturApp'
            }}
            component={FirstScreenStack} />

          <Drawer.Screen
            name="Create Marker"
            options={{
              drawerLabel: 'Criar Marcador',
              title: 'Criar Marcador'
            }}
            component={SecondScreenStack} />

          <Drawer.Screen
            name="Show Geolocate"
            options={{
              drawerLabel: 'Exibir GeoLocalizações',
              title: 'Exibir GeoLocalizações'
            }}
            component={ThreeScreenStack} />
            
            <Drawer.Screen
            name="DetailMarker"
            options={{
              drawerLabel: '',
              title: 'Detalhe Marcador'
            }}
            component={FourScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PropsProvider>
  );
};

export default App;
