
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { PropsThemeContext } from '../context/SisturMapsContext';
import { useContext } from "react";

const DetailMarkerComponent = () => {

    const { geoLocateDetail } = useContext(PropsThemeContext);

    return (
        <SafeAreaView>
            <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                    latitude: Number(geoLocateDetail[0]),
                    longitude: Number(geoLocateDetail[1]),
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {

                    <Marker
                        calloutAnchor={{
                            x: 2.9,
                            y: 0.8,
                        }}
                        coordinate={{
                            latitude: Number(geoLocateDetail[0]),
                            longitude: Number(geoLocateDetail[1]),
                        }}
                    >
                    </Marker>

                }

            </MapView>
        </SafeAreaView>
    );
}

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

export default DetailMarkerComponent;