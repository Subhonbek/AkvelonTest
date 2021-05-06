import React, {useState} from "react";
import {SliderData} from "./SliderData";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


const SliderImage = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.slide.length;

    if (!Array.isArray(props.slide) || props.slide.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current + 1)
    };

    const prevSlide = () => {
        setCurrent(current - 1)
    };

    return (
        <div className={"slider"}>

            {!(current === 0) ? (
                    <div>
                        <FaArrowLeft className={"left-arrow"} onClick={prevSlide}/>
                    </div>) :
                (<div>

                </div>)}
            <div>
                {
                    SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                                {index === current && (<img className={"image"} src={slide.image} alt="image"/>)}
                            </div>)
                    })
                }
            </div>
            {!(current === length - 1) ? (
                    <div>
                        <FaArrowRight className={"right-arrow"} onClick={nextSlide}/>
                    </div>) :
                (<div>

                </div>)}

        </div>
    );
};

export default SliderImage;