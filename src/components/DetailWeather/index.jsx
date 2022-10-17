import axios from "axios";
import React, { useEffect, useState } from 'react';
import './style.scss';


function DetailWeather() {
    const [weather, setWeather] = useState()

    const city = 'moscow'

    useEffect(() => {
        async function WeatherApi() {
            try {
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5fcbd4eafaa1546ebceedc9b60c37abc`);
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        WeatherApi();

    }, [])


    return (
        <div className="detail-weather">
            hihi
        </div>
    )
}

export default DetailWeather;