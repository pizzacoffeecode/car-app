import * as Font from 'expo-font';

const useFonts = async () => {
    await Font.loadAsync({
        Montserrat: require('../assets/fonts/fonts'),
    });
};

export default useFonts;