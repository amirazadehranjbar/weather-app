import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async (
        {locationName="Tehran", current_weather = true} = {},
        thunkAPI
    ) => {
        try {

            const locationData = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1`);




            const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
                params: {
                    latitude: locationData.data.results[0].latitude,
                    longitude: locationData.data.results[0].longitude,
                    current_weather: current_weather,
                    timezone:locationData.data.results[0].timezone,
                }
            });

            return res.data.current_weather;
        } catch (e) {

            const message = e.response?.data || e.message || "Unknown error";
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const init = {
    isLoading: false,
    isError: false,
    data: [],
    tempUnit:"C",
    speedUnit:"km",
    precipitationUnit:"mm",
    isOpenDropDownMenu:false,
}

const weatherSlice = createSlice(
    {
        name: "getWeather",
        initialState: init,

        extraReducers: builder => {
            builder.addCase(getWeather.pending, weatherData => {

                weatherData.isLoading = true;
                weatherData.isError = false;
            })

                .addCase(getWeather.fulfilled, (weatherData, action) => {
                    weatherData.isLoading = false;
                    weatherData.isError = false;
                    weatherData.data = action.payload;
                })

                .addCase(getWeather.rejected, weatherData => {
                    weatherData.isError = true;
                    weatherData.isLoading=false;
                })
        },

        reducers:{
            setTempUnits:(state , action)=>{
                state.tempUnit = action.payload.tempUnit;
            },

            setSpeedUnit:(state,action)=>{
                state.speedUnit = action.payload.speedUnit;
            },

            setPrecipitationUnit:(state , action)=>{
                state.precipitationUnit = action.payload.precipitationUnit;
            },


            setOpenDropDownMenu:(state)=>{
                state.isOpenDropDownMenu = !state.isOpenDropDownMenu;
            }

        }
    }
)


export const {setTempUnits,setSpeedUnit , setOpenDropDownMenu,setPrecipitationUnit} =  weatherSlice.actions;
export default weatherSlice.reducer;















