import {
    View, Pressable, Text, TouchableOpacity,
    StyleSheet, Dimensions, ActivityIndicator
} from 'react-native';
import { useEffect, useRef } from 'react';

//? Navigation
import { useNavigation } from '@react-navigation/native';

//? Maps
import MapView from 'react-native-maps';

//? Styles
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
import { Feather } from '@expo/vector-icons';


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
        <View style={ tw`w-full h-full bg-white` }>
            <View style={ tw`absolute z-10 w-full pt-60 bg-white` }>
                <ActivityIndicator size={ 100 } color={ `${ theme.colors[ 'dark-blue' ] }` } />
            </View>
            <View style={ tw`bg-[${ [ theme.colors.white ] }] w-10 h-10 ml-8 absolute mt-15 items-center justify-center z-10 rounded-lg` }>
                <TouchableOpacity style={ tw`flex items-start z-5` } onPress={ () => navigation.navigate("Confirm") }>
                    <View style={ tw`py-2` }><Feather name="arrow-left" style={ tw`opacity-50 w-24px h-24px` } size={ 24 } color="black" /></View>
                </TouchableOpacity>
            </View>
            <View style={ tw`flex-1 w-full h-full ` }>
                <MapView ref={ mapRef } style={ styles.map }
                    initialRegion={ initialRegion }
                >
                </MapView>
            </View>
            <View style={ tw`justify-center bg-white h-55 rounded-tr-3xl rounded-tl-3xl` }>
                <View style={ tw`px-8` }>
                    <View style={ tw`items-center w-full px-10 mb-3` }>
                        <Text style={ (tw`w-full text-base`, { fontFamily: "gilroyBold", textAlign: "center" }) }>
                            Your spot has been accepted, we’re finding you a buyer...
                        </Text>
                    </View>
                    <View style={ tw`items-center justify-center w-full pt-8` }>
                        <Pressable
                            style={ tw`${ `w-full border-2 border-solid border-[${ theme.colors[ 'error-red' ] }]` } rounded-3xl justify-center items-center h-48px` }
                            onPress={ () => { navigation.navigate("Confirm"); } }>
                            <Text style={ { fontFamily: "gilroyBold", color: `${ theme.colors[ 'error-red' ] }` } }>
                                Cancel Booking
                            </Text>
                        </Pressable>
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