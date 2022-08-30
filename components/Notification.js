import { View, Image, Text } from "react-native";
import tw from 'twrnc';

const data = {
    imageUrl: 1,
    imageAlt: "yo",
    title: "Hello",
    message: "Hello Notification"
};

function Notification() {
    const { imageUrl, imageAlt, title, message } = data;

    return (
        <View style={ tw`flex items-center max-w-sm p-6 mx-auto bg-white shadow-md rounded-xl` }>

        </View>
    );
}

export default Notification;