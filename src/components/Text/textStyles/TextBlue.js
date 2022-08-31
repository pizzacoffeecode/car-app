import { Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { theme } from '../../../../tailwind-config';
export default function TextBlue({ children }) {
    return (
        <Text style={ tw`text-[${ theme.colors[ 'dark-blue' ] }]` }>
            { children }
        </Text>
    );
}

