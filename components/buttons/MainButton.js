import { View, Text, TouchableOpacity, Pressable } from 'react-native';

import React from 'react';

//? Styles
import { StyleSheet } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
export default function MainButton({ title, handlePress, disabled }) {
    return (
        <View style={ tw`w-full` }>
            <Pressable
                style={ tw`${ !disabled ? `bg-[${ theme.colors[ 'dark-blue' ] }]` :
                    `bg-gray-500` } rounded-full justify-center items-center h-48px` }

                onPress={ disabled ? null : handlePress }>
                <Text style={ styles.button }>
                    { title }
                </Text>
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    button: {
        color: '#FFFFFF',
        justifyContent: 'center',
        fontFamily: 'gilroyBold',
        fontSize: 16,
        textAlign: 'justify',
    }
});;