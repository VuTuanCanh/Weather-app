import React from 'react'
import FormInput from '../FormInput';
import WeatherInfo from '../WeatherInfo';
import './style.scss';

function Weather() {
    return (
        <div className="weather">
            <h1>Weather</h1>
            <FormInput />
            <WeatherInfo />
        </div>
    )
}

export default Weather;