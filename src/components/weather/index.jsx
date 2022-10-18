import React from 'react'
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


// api thời tiết: http://api.openweathermap.org/data/2.5/weather?q=[bỏ ngoặc và điền tên thành phố]&units=metric&appid=5fcbd4eafaa1546ebceedc9b60c37abc