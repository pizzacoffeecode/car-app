import { View, Image, Pressable, TouchableOpacity, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//? Navigation
import { useNavigation } from '@react-navigation/native';

//? UI Library
import DropDownPicker from 'react-native-dropdown-picker';

//? Components
import { TextBlue, TextBold } from '../components/Text/textStyles/TextStyles';
import TitleText from '../components/Text/TitleText';
import MainText from '../components/Text/MainText';
import MainButton from '../components/buttons/MainButton';

//? Styles
import tw from 'twrnc';
import { theme } from '../tailwind-config';
import { Feather } from '@expo/vector-icons';
import city from '../assets/images/city-driver.png';
import carIcon from '../assets/images/icons/car.png';
import { StyleSheet } from 'react-native';


export default function AddCar() {
    const navigation = useNavigation();

    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState(null);
    const [ items, setItems ] = useState([
        { label: 'Mazda', value: 'Mazda, CX-9, 2020, Red', icon: () => <Image source={ carIcon } style={ tw`w-28px` } resizeMode="contain" /> },
        { label: 'Toyota', value: 'Toyota, Corlla, 2019, Silver', icon: () => <Image source={ carIcon } style={ tw`w-28px` } resizeMode="contain" /> },
        { label: 'Add', value: 'Add a new vehicle', icon: () => <Image source={ carIcon } style={ tw`w-28px` } resizeMode="contain" /> },
    ]);

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView>
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

                <View style={ tw`w-full pt-5` }>
                    <Text style={ { fontSize: 12, fontFamily: 'gilroy', paddingBottom: 5 } }>Your Car</Text>
                    <DropDownPicker
                        placeholder='Select your car'
                        showTickIcon={ true }
                        open={ open }
                        value={ value }
                        items={ items }
                        setOpen={ setOpen }
                        setValue={ setValue }
                        setItems={ setItems }
                    />
                </View>

                <View style={ tw`items-center justify-center mx-10 pt-2bg-gray-300 flex-12` }>
                    <Image source={ city } style={ tw`w-full h-full` } resizeMode="contain" />
                </View>
                <View style={ tw`items-center justify-center w-full h-150px` }>
                    <MainButton title={ "Add Car" } disabled={ !value } handlePress={ () => navigation.navigate("AddLocation") } />
                </View>
            </View >
        </SafeAreaView >
    );
};