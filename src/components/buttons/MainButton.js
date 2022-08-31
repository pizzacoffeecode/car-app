import { View, Text, TouchableOpacity } from 'react-native';

import React from 'react';

//? Styles
import { StyleSheet } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../../tailwind-config';
export default function MainButton({ title, handlePress, disabled }) {
    return (
        <View style={ tw`w-full` }>
            <TouchableOpacity
                activeOpacity={ 0.6 }
                style={ tw`${ !disabled ? `bg-[${ theme.colors[ 'dark-blue' ] }]` :
                    `bg-gray-500` } rounded-full justify-center items-center h-48px` }

                onPress={ disabled ? null : handlePress }>
                <Text style={ (tw`items-center justify-center text-base`, { fontFamily: 'gilroyBold', color: 'white' }) }>
                    { title }
                </Text>
            </TouchableOpacity>
        </View >
    );
}

