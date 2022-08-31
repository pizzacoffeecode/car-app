import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    car: null,
    price: null,
    location: null,
    cars: [],
    markers: [],
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setCar: (state, action) => {
            state.car = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setCars: (state, action) => {
            state.cars = [ ...state.cars, action.payload ];
        },
        setMarkers: (state, action) => {
            state.markers = [ ...state.markers, action.payload ];
        },
    }
});

//* Export createSlice Action Creators
export const { setCar, setPrice, setLocation, setCars, setMarkers } = navSlice.actions;

//* Selectors
export const selectCar = (state) => state.nav.car;
export const selectPrice = (state) => state.nav.price;
export const selectLocation = (state) => state.nav.location;
export const selectCars = (state) => state.nav.cars;
export const selectMarkers = (state) => state.nav.markers;
export default navSlice.reducer;