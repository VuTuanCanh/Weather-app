import axios from "axios";
import React, { useEffect, useState } from 'react';
import './style.scss';
import FormInputCity from '../FormInputCity';
import getDateTime from "../../features/dateTime";


function DetailWeather(props) {
    const { onTemp } = props;
    const [city, setCity] = useState('hanoi')

    const [dataList, setDataList] = useState({
        name: '',
        country: '',
        temp: '',
        main: '',
        description: '',
    });

    const OnSubmit = (text) => {
        setCity(text);
    }


    useEffect(() => {
        async function getWeatherApi() {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5fcbd4eafaa1546ebceedc9b60c37abc`);
                const data = response.data;
                setDataList(() => {
                    return {
                        name: data.name,
                        country: data.sys.country,
                        date: getDateTime(),
                        temp: data.main.temp,
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                        humidity: data.main.humidity,
                        windSpeed: data.wind.speed,
                    }
                });
                onTemp(data);
            } catch (error) {
                alert('No data found at this location!!!\nPlease change location.');
            }
        }
        getWeatherApi();

    }, [city])



    return (
        <div className="detail-weather">
            <div>
                <FormInputCity submited={OnSubmit} />
            </div>
            <div className="detail">
                <h1 className="city">{dataList.name}, {dataList.country}</h1>
                <p className="date">{dataList.date}</p>
                <h2 className="temp">{Math.round(dataList.temp)} &#176;C</h2>
                <h2 className="main">{dataList.main}</h2>
                <h3 className="desc">({dataList.description})</h3>
                <div className="more">
                    <p className="humidity">humidity: {dataList.humidity}%</p>
                    <p className="wind">wind speed: {dataList.windSpeed} (m/s)</p>
                </div>
            </div>
        </div>
    )
}

export default DetailWeather;