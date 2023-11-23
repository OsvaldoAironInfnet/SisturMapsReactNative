import { useContext } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { PropsThemeContext } from '../context/SisturMapsContext';
import { SectionList, Text, StyleSheet } from "react-native";

const ListMarkerComponent = ({ navigation }) => {
    const { locations, setDetailMarker } = useContext(PropsThemeContext);

    function getMarkerGeoLocate() {
        let listMarkers = [];
        locations.map((key, value) => (
            listMarkers.push("lat " + key.latitude + " lng " + key.longitude)
        ));
        
       return listMarkers
    }

    function showDetail(item) {
        navigation.navigate('DetailMarker')
        let lat = item.split(" ")[1];
        let long = item.split(" ")[3];
        let ff = [lat,long];
        setDetailMarker(ff)
    }

    return (
        <SafeAreaView>
            <SectionList
                sections={[
                    { title: 'GeoLocalização - Marcadores', data: getMarkerGeoLocate() },

                ]}
                renderItem={({ item }) => <Text onPress={() => showDetail(item)} style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


export default ListMarkerComponent;