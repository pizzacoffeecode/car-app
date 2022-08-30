import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//? Navigation
import { useNavigation } from '@react-navigation/native';

//? Components
import { TextBlue, TextBold } from '../components/Text/textStyles/TextStyles';
import TitleText from '../components/Text/TitleText';
import MainText from '../components/Text/MainText';
import MainButton from '../components/buttons/MainButton';

//? Styles
import tw from 'twrnc';
import { theme } from '../tailwind-config';
import { MaterialIcons } from '@expo/vector-icons';
import city from '../assets/images/city-driver.png';


export default function AddCar() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView>
            <View style={ tw`w-full h-full bg-[${ theme.colors[ 'bg-white' ] }]` }>
                <TouchableOpacity style={ tw`flex items-end` } onPress={ () => navigation.navigate("AddCar") }>
                    <View style={ tw`px-8 py-2` }><MaterialIcons style={ tw`opacity-50 w-24px h-24px` } name="close" size={ 24 } color="black" /></View>
                </TouchableOpacity>
                <View style={ tw`flex pt-5` }>
                    <TitleText>
                        First, add your <TextBlue>car.</TextBlue>
                    </TitleText>
                </View>
                <View style={ tw` flex-4` }>
                    <MainText>
                        Your car information will be used by buyers to easily find you. You have already added your car, if this is correct please continue or add a new car.
                    </MainText>
                </View>

                <View style={ tw`items-center justify-center mx-10 pt-2bg-gray-300 flex-12` }>
                    <Image source={ city } style={ tw`w-full h-full` } resizeMode="contain" />
                </View>
                <View style={ tw`items-center justify-center w-full h-150px` }>
                    <MainButton title={ "List your space!" } handlePress={ () => navigation.navigate("AddCar") } />
                </View>
            </View >
        </SafeAreaView >
    );
};