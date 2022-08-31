import { View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//? Navigation
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//? Components
import { TextBlue, TitleText, MainText, AutoComplete } from '../components/index';

//? Styles
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
import { Feather } from '@expo/vector-icons';
import map from '../../assets/images/map.png';


export default function AddLocation() {
    const navigation = useNavigation();

    return (

        <SafeAreaView style={ tw`bg-white` }>
            <View style={ tw`w-full px-8 h-full bg-white` }>
                <TouchableOpacity style={ tw`flex items-start` } onPress={ () => navigation.navigate("AddCar") }>
                    <View style={ tw`py-2` }><Feather name="arrow-left" style={ tw`opacity-50 w-24px h-24px` } size={ 24 } color="black" /></View>
                </TouchableOpacity>
                <View style={ tw`flex pt-5` }>
                    <TitleText>
                        Add the <TextBlue>location</TextBlue> of your parking <TextBlue>spot.</TextBlue>
                    </TitleText>
                </View>
                <View style={ tw`pt-3 pb-5` }>
                    <MainText>
                        Add the location of the parking spot that you want to list!
                    </MainText>
                </View>

                <View>
                    <Text style={ { fontSize: 12, fontFamily: 'gilroy' } }>Your Location</Text>
                    <View style={ tw` my-2 z-10 border border-[${ theme.colors[ 'border-gray' ] }]` }>
                        <AutoComplete />
                    </View>
                </View>
                <KeyboardAwareScrollView>
                    <View style={ tw`items-center justify-center pt-2 pt-10 h-350px` }>
                        <Image source={ map } style={ tw`z-0 w-full h-full` } resizeMode="contain" />
                    </View>
                </KeyboardAwareScrollView >
            </View >
        </SafeAreaView >
    );
};