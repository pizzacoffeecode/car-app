import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

import tw from 'twrnc';
import { theme } from '../../tailwind-config';

export default function MainText({ children }) {
    return (
        <View style={ tw`w-full` }>
            <View style={ tw`items-center justify-center px-10 pt-5 text-center` }>
                <Text style={ styles.mainText }>
                    { children }
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    mainText: {
        text: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'gilroyBold',
        textAlign: 'justify'
    }
});