import { Text } from 'react-native';
import React from 'react';

export default function TextBold({ children }) {
    return (
        <Text style={ { fontFamily: "gilroyBold" } }>
            { children }
        </Text>
    );
}