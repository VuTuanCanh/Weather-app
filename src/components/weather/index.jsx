import React from 'react';
import DetailWeather from '../DetailWeather';
import './style.scss';

function Weather() {
    return (
        <div className="weather">
            <h1>Weather</h1>
            <DetailWeather />
        </div>
    )
}

export default Weather;
