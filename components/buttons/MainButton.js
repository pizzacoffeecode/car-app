import { View, Text, TouchableOpacity, Pressable } from 'react-native';


import React from 'react';

//? Styles
import { StyleSheet } from 'react-native';
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
export default function MainButton(props) {
    const { title, handlePress } = props;
    return (
        <View style={ tw`w-full px-5` }>
            <Pressable
                style={ tw`bg-[${ theme.colors[ 'dark-blue' ] }] rounded-full justify-center items-center h-48px` }
                onPress={ handlePress }>
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
});