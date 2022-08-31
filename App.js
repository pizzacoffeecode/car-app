
//?Expo
import { useFonts } from 'expo-font';

//? Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//? Redux
import { Provider } from 'react-redux';
import { store } from './src/app/store';

//? Screens
import { Intro, AddCar, AddLocation, Duration, Pending, Confirm, Price } from './src/screens/index';

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
    <Provider store={ store }>
      <NavigationContainer>
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
          <Stack.Screen
            name="AddLocation"
            component={ AddLocation }
            options={ {
              headerShown: false,
            } }
          />
          <Stack.Screen
            name="Duration"
            component={ Duration }
            options={ {
              headerShown: false,
            } }
          />
          <Stack.Screen
            name="Price"
            component={ Price }
            options={ {
              headerShown: false,
            } }
          />
          <Stack.Screen
            name="Confirm"
            component={ Confirm }
            options={ {
              headerShown: false,
            } }
          />
          <Stack.Screen
            name="Pending"
            component={ Pending }
            options={ {
              headerShown: false,
            } }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
}


