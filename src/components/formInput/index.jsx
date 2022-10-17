import React, { useState } from 'react'
import removeVietnameseTones from '../Convert/convertStringVn';
import './style.scss';


function FormInput() {
    const [city, setCity] = useState('')


    const handleInput = (e) => {
        setCity(e);
    }

    const handleBtnSubmit = (e) => {
        e.preventDefault();
        console.log(removeVietnameseTones(city));
    }
    console.log(city);

    return (
        <form action="">
            <input
                type="text"
                value={city}
                onChange={(e) => handleInput(e.target.value)}
            />
            <button
                onClick={(e) => handleBtnSubmit(e)}
            >Search</button>
        </form>
    )
}

export default FormInput;



// lấy nhiệt độ + độ ẩm + tầm nhìn + tốc độ gió 