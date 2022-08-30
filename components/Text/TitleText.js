import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import tw from 'twrnc';
export default function TitleText({ children }) {
    return (
        <View style={ tw`w-full` }>
            <View style={ tw`items-center justify-center pt-3 text-center` }>
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
        fontFamily: 'gilroyTitle',
        fontSize: 28,
        textAlign: 'justify',
    }
});