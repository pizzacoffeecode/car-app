import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

//? UI Library
import DropDownPicker from 'react-native-dropdown-picker';

//? React
import { useDispatch, useSelector } from 'react-redux';

//? Styles
import tw from 'twrnc';
import carIcon from '../../../assets/images/icons/car.png';
import plusIcon from '../../../assets/images/icons/plus.png';
import { theme } from '../../../tailwind-config';
import { selectCar, setCar } from '../../app/navSlice';

export default function Dropdown() {
    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState(null);

    const dispatch = useDispatch(setCar);
    const select = useSelector(selectCar);

    useEffect(() => {
        dispatch(setCar(value));
        console.log(select);

    }, [ value, setValue ]);


    const [ items, setItems ] = useState([
        { label: 'Mazda, CX-9, 2020, Red', value: 'Mazda', icon: () => <Image source={ carIcon } style={ tw`w-28px` } resizeMode="contain" /> },
        { label: 'Toyota, Corolla, 2019, Silver', value: 'Toyota', icon: () => <Image source={ carIcon } style={ tw`w-28px` } resizeMode="contain" /> },
        { label: 'Add a new vehicle', value: 'Add', icon: () => <Image source={ plusIcon } style={ tw`w-28px` } resizeMode="contain" /> },
    ]);

    return (
        <View style={ tw`w-full pt-5` }>
            <Text style={ { fontSize: 12, fontFamily: 'gilroy', paddingBottom: 5 } }>Your Car</Text>
            <DropDownPicker
                placeholder='Select your car'
                showTickIcon={ true }
                open={ open }
                value={ value }
                items={ items }
                setOpen={ setOpen }
                setValue={ setValue }
                setItems={ setItems }
                style={ tw`border-[${ theme.colors[ 'border-gray' ] }]` }
            />
        </View>
    );
}