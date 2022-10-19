import classNames from 'classnames';
import React, { useState } from 'react';
import DetailWeather from '../DetailWeather';
import './style.scss';

function WeatherCity() {
    const [temp, setTemp] = useState()

    const Temp = (data) => {
        setTemp(data.main.temp);
    }

    return (
        <div className={classNames('weather', {
            warm: temp > 15 && temp < 20 ? 'warm' : false,
            hot: temp > 30 ? 'hot' : false,
            cool: temp > 20 && temp < 29 ? 'cool' : false,
            cold: temp < 15 ? 'cold' : false,
        })}>
            <DetailWeather onTemp={Temp} />
        </div>
    )
}

export default WeatherCity;
