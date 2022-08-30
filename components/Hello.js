import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Notification from './Notification';

const Hello = () => {


    return (
        <SafeAreaView style={ tw`flex h-full` }>
            <View style={ tw`items-center pt-12` }>
                <Text>Hello Tailwind</Text>
                <Notification />
            </View>
        </SafeAreaView>
    );
};

export default Hello;