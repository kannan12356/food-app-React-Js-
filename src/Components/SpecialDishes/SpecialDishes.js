import React from 'react';
import './SpecialDishes.css';

function SpecialDishes(props) {

    return (
        <>
            <div className="special-dishes">
                <h2>Our Special Dishes</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
            </div>
            <div className="special-dishesMenu">
                <ul className="dish-menu">
                    {
                        props.specialMenu.map((item, index)=>{
                            
                            return(                                                
                                <li key={index} className="dish-item">
                                    <img 
                                        className="dish-img"
                                        src={item.strMealThumb} 
                                        alt="dishes" 
                                    />
                                    <h4>{item.strMeal}</h4>
                                </li>
                            )
                                                       
                        })
                    }                    
                </ul>
            </div>
            
        </>
    )
}

export default SpecialDishes
