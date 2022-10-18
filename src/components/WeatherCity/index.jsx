import React from 'react';
import DetailWeather from '../DetailWeather';
import './style.scss';

function WeatherCity() {
    return (
        <div className="weather">
            <h1>Weather</h1>
            <DetailWeather />
        </div>
    )
}

export default WeatherCity;
