import React from 'react'
import FormInput from '../FormInput';
import DetailWeather from '../DetailWeather';
import './style.scss';

function Weather() {
    return (
        <div className="weather">
            <h1>Weather</h1>
            <FormInput />
            <DetailWeather />
        </div>
    )
}

export default Weather;


// api thời tiết: http://api.openweathermap.org/data/2.5/weather?q=[Địa điểm]&appid=5fcbd4eafaa1546ebceedc9b60c37abc