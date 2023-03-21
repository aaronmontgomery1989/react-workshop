import axios from "axios";
import LocationResponse from "../models/LocationResponse";
import WeatherResponse from "../models/WeatherResponse";

const apiKey: string = process.env.REACT_APP_OPEN_WEATHER_API_KEY || "";

export const getLocation = (latitude: number, longitude: number): Promise<LocationResponse> => {
    return axios
        .get(`https://api.weather.gov/points/${latitude},${longitude}`)
        .then((res) => res.data);
};

export const getWeatherByLocationUrl = (url: string): Promise<WeatherResponse> => {
    return axios
        .get(`${url}`)
        .then((res) => res.data);
};

export const getWeatherByLocationCoordinates = (latitude: number, longitude: number): Promise<WeatherResponse> => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then((res) => res.data);
};
