import { View, Pressable, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//? Navigation
import { useNavigation } from '@react-navigation/native';

//? Maps
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

//? Components
import { TextBlue, TextBold } from '../components/Text/textStyles/TextStyles';
import TitleText from '../components/Text/TitleText';
import MainText from '../components/Text/MainText';
import MainButton from '../components/buttons/MainButton';

//? Styles
import tw from 'twrnc';
import { theme } from '../tailwind-config';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import car from '../assets/images/car.png';


export default function Duration() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const mapRef = useRef(null);

    const initialRegion = {
        latitude: 40.2011,
        longitude: -74.8606,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    };

    return (
        <View style={ tw`w-full h-full` }>

            <View style={ tw`bg-[${ [ theme.colors.white ] }] w-10 h-10 ml-8 absolute mt-15 items-center justify-center z-10 rounded-lg` }>
                <TouchableOpacity style={ tw`flex items-start z-5` } onPress={ () => navigation.navigate("AddLocation") }>
                    <View style={ tw`py-2` }><Feather name="arrow-left" style={ tw`opacity-50 w-24px h-24px` } size={ 24 } color="black" /></View>
                </TouchableOpacity>
            </View>
            <View style={ tw`flex-1 w-full h-full ` }>
                <MapView ref={ mapRef } style={ styles.map }
                    initialRegion={ initialRegion }
                >
                    {/* { stateMarkers && stateMarkers.map((dataObj, index) => (

                            <MapView.Marker
                                key={ index }
                                coordinate={ { latitude: dataObj.markers.coords.latitude, longitude: dataObj.markers.coords.longitude } }
                                title={ dataObj.tagId[ 0 ].id }
                                description={ dataObj.readOnly[ 0 ].canMakeReadOnly === true ? "true" : "false" }
                                initialRegion={ initialRegion }
                            />
                        )) } */}
                </MapView>
            </View>


            {/* <View style={ tw`` }> */ }
            <View style={ tw`justify-center bg-white h-55 rounded-tr-3xl rounded-tl-3xl` }>
                <View style={ tw`px-8` }>
                    <View style={ tw`w-full mb-3 items-center` }>
                        <Text style={ (tw`text-base `, { fontFamily: "gilroyBold" }) }>Confirm Location</Text>
                    </View>
                    <View style={ tw`flex-row my-2 rounded-md border border-[${ theme.colors[ 'border-gray' ] }]` }>
                        <MaterialIcons style={ tw`p-2 opacity-40` } name="location-on" size={ 24 } color="black" />
                        <TextInput style={ tw`w-full px-2 color-gray-300` } placeholder="Enter you location..." />
                    </View>
                    <View style={ tw`items-center justify-center w-full pt-4` }>
                        <MainButton title={ "Confirm" } handlePress={ () => navigation.navigate("AddCar") } />
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