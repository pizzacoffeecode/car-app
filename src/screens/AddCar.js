import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//? Navigation
import { useNavigation } from '@react-navigation/native';



//? Components
import { TextBlue, TitleText, MainText, MainButton, Dropdown } from '../components/index';

//? Styles
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
import { Feather } from '@expo/vector-icons';
import city from '../../assets/images/city-driver.png';


export default function AddCar() {
    const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false,
    //     });
    // }, []);

    return (
        <SafeAreaView style={ tw`bg-white` }>
            <View style={ tw`w-full px-8 h-full bg-[${ theme.colors[ 'bg-white' ] }]` }>
                <TouchableOpacity style={ tw`flex items-start` } onPress={ () => navigation.navigate("Intro") }>
                    <View style={ tw`py-2` }><Feather name="arrow-left" style={ tw`opacity-50 w-24px h-24px` } size={ 24 } color="black" /></View>
                </TouchableOpacity>
                <View style={ tw`flex pt-5` }>
                    <TitleText>
                        First, add your <TextBlue>car.</TextBlue>
                    </TitleText>
                </View>
                <View style={ tw`pt-3` }>
                    <MainText>
                        Your car information will be used by buyers to easily find you. You have already added your car, if this is correct please continue or add a new car.
                    </MainText>
                </View>
                <Dropdown />

                <View style={ tw`items-center justify-center pt-2 mx-10 flex-12` }>
                    <Image source={ city } style={ tw`w-full h-full` } resizeMode="contain" />
                </View>
                <View style={ tw`items-center justify-center w-full h-150px` }>
                    <MainButton title={ "Add Car" } disabled={ false } handlePress={ () => navigation.navigate("AddLocation") } />
                </View>
            </View >
        </SafeAreaView >
    );
};