import { createContext, useState } from "react";

export const PropsThemeContext = createContext();

export function PropsProvider({children}) {

    const [locations, setLocate] = useState([]);
    const [geoLocateDetail, setGeoLocateDetail] = useState();

    function setLocation(location) {
        setLocate(locate => [...locate, {latitude: location.latitude, longitude: location.longitude}]);
        console.log(locations);
    }

    function setDetailMarker(item) {
        setGeoLocateDetail(item)
        console.log(item);
    }


    return (
        <PropsThemeContext.Provider value={{ locations, setLocation, setDetailMarker, geoLocateDetail}}>
        {children}
        </PropsThemeContext.Provider>
    );
}

export default PropsProvider;