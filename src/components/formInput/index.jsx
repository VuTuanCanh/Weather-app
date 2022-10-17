import React, { useState } from 'react'
import removeVietnameseTones from '../../features/Convert/convertStringVn';
import './style.scss';


function FormInput(props) {
    const { submited } = props;

    const [value, setValue] = useState('')



    const handleBtnSubmit = (e) => {
        e.preventDefault();
        submited(removeVietnameseTones(value));
    }

    return (
        <form action="">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={(e) => handleBtnSubmit(e)}
            >Search</button>
        </form>
    )
}

export default FormInput;



// lấy nhiệt độ + độ ẩm + tầm nhìn + tốc độ gió 