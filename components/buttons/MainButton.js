import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { theme } from '../../tailwind-config';
export default function MainButton(props) {

    const { text } = props;

    return (
        <View style={ tw`w-full px-5` }>
            <Pressable style={ tw`bg-[${ theme.colors[ 'dark-blue' ] }] rounded-full justify-center items-center h-48px` }>
                <Text style={ styles.button }>
                    { text }
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


// onLongPress={ () => { } }
// class="text-white font-bold py-2 flex-1 rounded-full"
// title={ text }
// color='red-500'