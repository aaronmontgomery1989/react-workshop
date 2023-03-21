import { useEffect, useState } from "react";
import { getWeatherByLocationUrl, getLocation } from "../services/weatherApiService";
import Period from "../models/Period";
import "./WeatherResponse.css";

const WeatherResponse = () => {
    const [weatherPeriods, setWeatherPeriods] = useState<Period[]>([]);
    const [latitude, setLatitude] = useState(42.33168);
    const [longitude, setLongitude] = useState(-83.048);
    
    useEffect(() => {
        getLocation(latitude, longitude).then((res) => {
            getWeatherByLocationUrl(res.properties.forecast).then((res) => {
                setWeatherPeriods(res.properties.periods);
            });
        });
    }, [latitude, longitude]);
    
    return (
        <div>
            <label>Latitude</label>
            <input type="text" id="latitude" value={latitude} onChange={(e) => setLatitude(+e.target.value)}></input>
            <br></br>
            <label>Longitude</label>
            <input type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(+e.target.value)}></input>
            <ul>
                {weatherPeriods.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>{item.name}</p>
                            <p>{item.temperature}</p>
                            <p>{item.detailedForecast}</p>
                            <img src={item.icon} alt=""></img>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WeatherResponse;
