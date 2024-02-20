// Slider.jsx
import React from 'react';
import { Carousel } from 'flowbite-react';
import dataObject from "../data";

const Slider = () => {
    return (
        <>
            {/* <div>
                <img src={dataObject.sliderData[0].image} alt="slider-image" />
            </div> */}

            <div className="h-56 sm:h-64 lg:h-96 xl:h-[35rem] 2xl:h-[] ">
                <Carousel>
                    <img src={dataObject.sliderData[0].image} alt="..." />
                    <img src={dataObject.sliderData[1].image} alt="..." />
                    <img src={dataObject.sliderData[2].image} alt="..." />
                    <img src={dataObject.sliderData[3].image} alt="..." />
                </Carousel>
            </div>
        </>
    )
}

export default Slider;
