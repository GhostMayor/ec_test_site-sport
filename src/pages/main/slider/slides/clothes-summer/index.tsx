import React from 'react';
import imageUrl from 'images/summer-slide.jpg';
import './style.scss';

export default function SliderClothesSummer() {

    return (
        <div className='slide-clothes_summer' style={{backgroundImage: `url(${imageUrl})`}}>
            <h3>
                <p>Летняя Одежда</p>
                <p>и Обувь</p>
            </h3>
            <button type="button">
                Подробнее
            </button>
        </div>
    )
}