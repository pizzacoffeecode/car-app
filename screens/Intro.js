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
import car from '../assets/images/car.png';


export default function Intro() {
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
                <View style={ tw`flex px-8 pt-5` }>
                    <TitleText>
                        List your <TextBlue>parking space!</TextBlue>
                    </TitleText>
                </View>
                <View style={ tw`px-8 flex-4` }>
                    <MainText>
                        We started a pilot program in NYC. On average, host makes <TextBold>$928 a month.</TextBold> If you live in NYC, become a host and help others find parking easily!
                    </MainText>
                </View>

                <View style={ tw`items-center justify-center pt-2bg-gray-300 flex-12` }>
                    <Image source={ car } style={ tw`w-full h-full` } resizeMode="contain" />
                </View>
                <View style={ tw`items-center justify-center w-full px-8 h-150px` }>
                    <MainButton title={ "List your space!" } handlePress={ () => navigation.navigate("AddCar") } />
                </View>
            </View >
        </SafeAreaView >
    );
};