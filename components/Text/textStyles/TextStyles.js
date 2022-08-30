import { Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { theme } from '../../../tailwind-config';
export function TextBlue({ children }) {
    return (
        <Text style={ tw`text-[${ theme.colors[ 'dark-blue' ] }]` }>
            { children }
        </Text>
    );
}


export function TextBold({ children }) {
    return (
        <Text style={ { fontFamily: "gilroySemiBold" } }>
            { children }
        </Text>
    );
}