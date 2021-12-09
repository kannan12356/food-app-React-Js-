import React from 'react';
import './CardDish.css';

function CardDishes(props) {   

    return (
        <div>
            <li 
                className="dish-item"
                onClick={()=> props.showPopup(props.mealName)}
                >
                <img 
                    className="dish-img"
                    src={props.imgSrc} 
                    alt="dishes" 
                />
                <h4>{props.mealName}</h4>
            </li>
        </div>
    )
}

export default CardDishes
