import React from "react";
import imageUrl from 'images/woman_and_man_and_sport.png';
import './style.scss';

export default function SaleSlide() {
  return (
    <div className="slide-sale" style={{backgroundImage: `url(${imageUrl})`}}>
      <div className="slide-sale-header">
        <h3>SALE</h3>
        <span>- 60 %</span>
      </div>
      <div className="slide-sale-buttons">
      <button type="button">Все для Женщин</button>
      <button type="button">Все для Мужчин</button>
      </div>
    </div>
  );
}
