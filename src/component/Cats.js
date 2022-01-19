import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


const Cat = ({cat: {name, origin, temperament, weight, life_span, description, url}}) => {
    return(
        <div className="cat-wrapper">
            <div className="cat-img">
                <LazyLoadImage src = {url} alt = {name} effect = "blur" />
            </div>
            <div className="cat-text">
                <p className='cat-name'>{name}</p>
                <p>{origin}</p>
                <p><span>Temperament:</span> {temperament}</p>
                <p><span>Life-Span:</span> {life_span} years</p>
                <p><span>Weight:</span> {weight.metric} kg</p>
                <p><span>Description</span> <br /> {description}</p>
            </div>
        </div>
    )
}

export default Cat;