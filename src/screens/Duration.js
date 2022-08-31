import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRef } from 'react';

//? Navigation
import { useNavigation } from '@react-navigation/native';

//? Maps
import MapView from 'react-native-maps';

//? Redux
import { useSelector } from 'react-redux';
import { selectLocation } from '../app/navSlice';

//? Components
import { MainButton } from '../components/index';

//? Styles
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Duration() {
    const navigation = useNavigation();
    const selectLoc = useSelector(selectLocation);

    const mapRef = useRef(null);

    const initialRegion = {
        latitude: selectLoc.location.lat,
        longitude: selectLoc.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    };
    console.log(selectLoc.description);

    return (
        <View style={ tw`w-full h-full bg-white` }>

            <View style={ tw`bg-white w-10 h-10 ml-8 absolute mt-15 items-center justify-center z-10 rounded-lg` }>
                <TouchableOpacity style={ tw`flex items-start z-5` } onPress={ () => navigation.navigate("AddLocation") }>
                    <View style={ tw`py-2` }><Feather name="arrow-left" style={ tw`opacity-50 w-24px h-24px` } size={ 24 } color="black" /></View>
                </TouchableOpacity>
            </View>
            <View style={ tw`flex-1 w-full h-full ` }>
                <MapView ref={ mapRef } style={ styles.map }
                    initialRegion={ initialRegion }
                >
                    <MapView.Marker
                        key={ 1 }
                        image={ require('../../assets/images/icons/parking-loc-large.png') }
                        coordinate={ { latitude: selectLoc.location.lat, longitude: selectLoc.location.lng } }
                        title={ "614 Clinton Street, Hoboken, NJ" }
                        description={ "" }
                        initialRegion={ {
                            latitude: selectLoc.location.lat,
                            longitude: selectLoc.location.lng,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        } }
                    />
                </MapView>
            </View>

            <View style={ tw`justify-center bg-white h-55 rounded-tr-3xl rounded-tl-3xl` }>
                <View style={ tw`px-8` }>
                    <View style={ tw`items-center w-full mb-3` }>
                        <Text style={ (tw`text-base `, { fontFamily: "gilroyBold" }) }>Confirm Location</Text>
                    </View>
                    <View style={ tw`flex-row my-2 rounded-md border border-[${ theme.colors[ 'border-gray' ] }]` }>
                        <MaterialIcons style={ tw`p-2 opacity-40` } name="location-on" size={ 24 } color="black" />
                        <TextInput style={ tw`w-full px-2` }
                            placeholder="Enter a location..."
                            value={ selectLoc.description }
                        />
                    </View>
                    <View style={ tw`items-center justify-center w-full pt-4` }>
                        <MainButton title={ "Confirm" } handlePress={ () => navigation.navigate("Price") } />
                    </View>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 0,
        elevation: 0,
        position: 'absolute',
        paddingBottom: 50,
    },
});