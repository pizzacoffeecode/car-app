import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

import tw from 'twrnc';

export default function MainText({ children }) {
    return (
        <View style={ tw`w-full` }>
            <View style={ tw`items-start justify-center pt-5 text-justify` }>
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
        fontSize: 16,
        textAlign: 'justify'
    }
});