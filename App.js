import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

//?Expo

import { useFonts } from 'expo-font';


//? Navigation
import { NavigationContainer } from '@react-navigation/native';

//?Hooks


//? Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

//? Screens
import Intro from './screens/Intro';


//? Components

const Stack = createNativeStackNavigator();


export default function App() {
  const [ loadedFonts ] = useFonts({
    gilroySemiBold: require('./assets/fonts/Gilroy-SemiBold.otf'),
    gilroyBold: require('./assets/fonts/Gilroy-Bold.otf'),
    gilroyTitle: require('./assets/fonts/Gilroy-ExtraBold.otf'),
    gilroy: require('./assets/fonts/Gilroy-Medium.otf'),
  });

  //* Load Fonts
  if (!loadedFonts) {
    return null;
  }

  return (



    <SafeAreaView>

      <Intro />

    </SafeAreaView>
    // <NavigationContainer>
    //   <SafeAreaView>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="Intro"
    //         component={ Intro }
    //       // options={ {
    //       //   headerShown: false,
    //       // } }
    //       />


    //     </Stack.Navigator>
    //   </SafeAreaView>
    // </NavigationContainer>


  );
}


