import axios from "axios";
import React, { useEffect, useState } from 'react';
import './style.scss';
import FormInput from '../FormInput';


function DetailWeather() {
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
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5fcbd4eafaa1546ebceedc9b60c37abc`);
                const data = response.data;
                console.log(data);
                setDataList(() => {
                    return {
                        name: data.name,
                        country: data.sys.country,
                        temp: data.main.temp,
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }
        getWeatherApi();

    }, [city])

    console.log(dataList);


    return (
        <div className="detail-weather">
            <div className="form-input">
                <FormInput submited={OnSubmit} />
            </div>
            <div className="detail">
                <h1>{dataList.name}, {dataList.country}</h1>
                <h2>{dataList.temp} &#176;C</h2>
                <h2>{dataList.main}</h2>
                <h3>detail: {dataList.description}</h3>
            </div>

        </div>
    )
}

export default DetailWeather;