import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//? Navigation
import { useNavigation } from '@react-navigation/native';

//? Components
import { TitleText, MainText, MainButton } from '../components/index';

//? Styles
import tw from 'twrnc';
import { theme } from '../../tailwind-config';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Confirm() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={ tw`bg-white` }>
            <View style={ tw`w-full h-full px-8 bg-white` }>
                <TouchableOpacity style={ tw`flex items-start` } onPress={ () => navigation.navigate("Price") }>
                    <View style={ tw`py-2` }><Feather name="arrow-left" style={ tw`opacity-50 w-24px h-24px` } size={ 24 } color="black" /></View>
                </TouchableOpacity>
                <View style={ tw`flex pt-5` }>
                    <TitleText>
                        Confirm Submission
                    </TitleText>
                </View>
                <View style={ tw`pt-3 pb-5` }>
                    <MainText>
                        Make sure that all details are correct before submitting.
                    </MainText>
                </View>
                <View style={ tw`flex-4` }>
                    <View style={ tw`pb-4` }>
                        <Text style={ { fontSize: 12, fontFamily: 'gilroy' } }>Your Car</Text>
                        <View style={ tw`pl-6 flex-row items-center justify-center rounded-md my-2 border border-[${ theme.colors[ 'border-gray' ] }]` }>
                            <Ionicons style={ tw`opacity-50` } name="ios-car" size={ 24 } color="black" />
                            <TextInput style={ tw`w-80% py-2` } />
                            <MaterialIcons style={ tw`pr-10 opacity-50` } name="arrow-drop-down" size={ 24 } color="black" />
                        </View>
                    </View>
                    <View style={ tw`pb-4` }>
                        <Text style={ { fontSize: 12, fontFamily: 'gilroy' } }>Location</Text>
                        <View style={ tw`pl-6 flex-row items-center justify-center rounded-md my-2 border border-[${ theme.colors[ 'border-gray' ] }]` }>
                            <Feather style={ tw`opacity-50` } name="map" size={ 24 } color="black" />
                            <TextInput style={ tw`w-full px-2 py-2` } />
                        </View>
                    </View>
                    <View style={ tw`pb-4` }>
                        <Text style={ { fontSize: 12, fontFamily: 'gilroy' } }>Price</Text>
                        <View style={ tw`pl-6 flex-row items-center justify-center rounded-md my-2 border border-[${ theme.colors[ 'border-gray' ] }]` }>
                            <Feather style={ tw`opacity-50` } name="dollar-sign" size={ 24 } color="black" />
                            <TextInput style={ tw`w-full px-2 py-2` } />
                        </View>
                    </View>
                </View>
                <View style={ tw`absolute bottom-0 z-10 self-center w-full pb-10` }>
                    <MainButton title={ "Confirm" } disabled={ buttonActive } handlePress={ () => navigation.navigate("Pending") } />
                </View>
            </View >
        </SafeAreaView >
    );
};