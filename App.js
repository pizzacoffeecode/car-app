import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from '@react-navigation/native';

import { useState } from 'react';

//?Expo

import { useFonts } from 'expo-font';


//? Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

//?Hooks

//? Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

//? Screens
import { Intro, AddCar } from './screens/index';

//? Components

//? Tailwind
import tw from 'twrnc';
import { theme } from './tailwind-config';

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
    <NavigationContainer>
      <SafeAreaProvider style={ tw`bg-[${ theme.colors[ 'bg-white' ] }]` }>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={ Intro }
            options={ {
              headerShown: false,
            } }
          />
          <Stack.Screen
            name="AddCar"
            component={ AddCar }
            options={ {
              headerShown: false,
            } }
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


