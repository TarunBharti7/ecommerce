// Slider.jsx
import React from 'react';
import dataObject from "../data";

const Slider = () => {
    return (
        <>
            <div>
                <img src={dataObject.sliderData[0].image} alt="slider-image" />
            </div>
        </>
    )
}

export default Slider;
