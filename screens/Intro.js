import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { MaterialIcons } from '@expo/vector-icons';

import TitleText from '../components/Text/TitleText';
import MainText from '../components/Text/MainText';
import MainButton from '../components/buttons/MainButton';
import { TextBlue, TextBold } from '../components/Text/textStyles/TextStyles';


import { theme } from '../tailwind-config';

import car from '../assets/images/Car.png';

export default function Intro() {
    return (

        <View style={ tw`w-full h-full bg-[${ theme.colors[ 'bg-white' ] }]` }>
            <View style={ tw`flex items-end bg-white` }>
                <View style={ tw`px-3 py-2` }><MaterialIcons style={ tw`opacity-50 w-24px h-24px` } name="close" size={ 24 } color="black" /></View>
            </View>
            <View style={ tw`bg-red-500 flex-2` }>
                <TitleText>
                    List your <TextBlue>parking space!</TextBlue>
                </TitleText>
            </View>
            <View style={ tw` flex-4` }>
                <MainText content="We started a pilot program in NYC. On average, host makes $928 a month. If you live in NYC, become a host and help others find parking easily!" />
            </View>

            <View style={ tw`items-center justify-center pb-10 pt-2bg-gray-300 flex-12` }>
                <Image source={ car } style={ tw`w-full h-full` } />
            </View>
            <View style={ tw`items-center justify-center w-full bg-yellow-500 flex-3` }>
                <MainButton text="List your space!" />
            </View>
        </View >

    );
};