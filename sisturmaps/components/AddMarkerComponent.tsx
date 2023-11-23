import { SafeAreaView } from 'react-native-safe-area-context';
import { PropsThemeContext } from '../context/SisturMapsContext';
import { View, Button, TextInput, StyleSheet, Alert } from 'react-native';
import TextField from './utils/TextFieldComponent';
import { useContext } from "react";
import React, { useState } from 'react';

const AddMarkerComponent = ({ navigation }) => {

    const { setLocation } = useContext(PropsThemeContext);
    const [latitude, setLat] = useState(0)
    const [longitude, setLong] = useState(0);

    function addMarker() {
        if (latitude == 0 || longitude == 0) {
            Alert.alert("Digite os campos corretamente")
        } else {
            let locate = { latitude: Number(latitude), longitude: Number(longitude) };
            setLocation(locate);
            navigation.goBack();
        }
    }

    return (
        <SafeAreaView>
            <View>
                <TextField
                    label="Latitude"
                    value={latitude}
                    onChangeText={text => setLat(text)}
                />

                <TextField
                    label="Longitude"
                    value={longitude}
                    onChangeText={text => setLong(text)}
                />

                <View style={styles.btn}>
                    <Button
                        onPress={() => { addMarker() }}
                        title="Criar Marcador"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    btn: {
        width: '100%'
    },
});

export default AddMarkerComponent;