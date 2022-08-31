import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { REACT_APP_MAPS } from "@env";
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../app/navSlice';

const AutoComplete = () => {
    const navigation = useNavigation();
    const MAPS_KEY = REACT_APP_MAPS;

    const dispatch = useDispatch(setLocation);
    return (
        <GooglePlacesAutocomplete style={ tw`` }
            placeholder='Enter your location...'
            styles={ {
                container: {
                    flex: 0,
                    padding: 0,
                    borderWidth: 0,
                    borderColor: "white",
                    backgroundColor: "white",
                },
                textInputContainer: {
                    padding: 0,
                    borderWidth: 0,
                    borderColor: "white",
                },
                textInput: {
                    padding: 0,
                    fontSize: 18,
                    borderColor: "#D6D6D6",
                    borderWidth: 0,
                },
                separator: {
                    height: 2,
                }
            } }
            onPress={ (data, details = null) => {

                dispatch(
                    setLocation({
                        location: details.geometry.location,
                        description: data.description
                    })
                );

                navigation.navigate("Duration");
            } }

            fetchDetails={ true }
            returnKeyType={ "search" }
            enablePoweredByContainer={ false }
            minLength={ 2 }
            query={ {
                key: MAPS_KEY,
                language: 'en',
            } }
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={ 400 }
            onFail={ (error) => console.error(error) }
        />
    );
};

export default AutoComplete;