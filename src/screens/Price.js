import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//? Navigation
import { useNavigation } from '@react-navigation/native';

//? Redux
import { useDispatch } from 'react-redux';

//? Components
import { TextBlue, TitleText, MainText, MainButton } from '../components/index';

//? Styles
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
import { Feather } from '@expo/vector-icons';
import calculator from '../../assets/images/calculator.png';
import { setPrice } from '../app/navSlice';


export default function Price() {
    const navigation = useNavigation();
    const [ priceText, setPriceText ] = useState('');

    const dispatch = useDispatch();

    async function handlePress() {

        await dispatch(setPrice(priceText));

        navigation.navigate("Confirm");
    }

    return (
        <SafeAreaView style={ tw`bg-white` }>
            <View style={ tw`w-full px-8 h-full bg-white` }>
                <TouchableOpacity style={ tw`flex items-start` } onPress={ () => navigation.navigate("Duration") }>
                    <View style={ tw`py-2` }><Feather name="arrow-left" style={ tw`opacity-50 w-24px h-24px` } size={ 24 } color="black" /></View>
                </TouchableOpacity>
                <View style={ tw`flex pt-5` }>
                    <TitleText>
                        Add your <TextBlue>price.</TextBlue>
                    </TitleText>
                </View>
                <View style={ tw`pt-3 pb-5` }>
                    <MainText>
                        This is the price that you want to charge for this parking space.
                    </MainText>
                </View>

                <View style={ tw`` }>
                    <Text style={ { fontSize: 12, fontFamily: 'gilroy' } }>Price</Text>
                    <View style={ tw`pl-6 flex-row items-center justify-center rounded-md my-2 border border-[${ theme.colors[ 'border-gray' ] }]` }>
                        <Feather style={ tw`opacity-50` } name="dollar-sign" size={ 20 } color="black" />
                        <TextInput style={ tw`w-full py-2 px-2` }
                            placeholder="Parking spot price..."
                            onChangeText={ newText => setPriceText(newText) }
                            defaultValue={ priceText }
                        />
                    </View>
                </View>
                <View style={ tw`items-center justify-center h-350px` }>
                    <Image source={ calculator } style={ tw`w-full h-full` } resizeMode="contain" />
                </View>

                <View style={ tw`absolute bottom-0 pb-10 w-full z-10 self-center` }>
                    <MainButton
                        title={ "Add Car" }
                        disabled={ !priceText }
                        handlePress={ async () => { handlePress(); } } />
                </View>
            </View >
        </SafeAreaView >
    );
};

