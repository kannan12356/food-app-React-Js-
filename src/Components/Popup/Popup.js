import React, { useContext } from 'react';
import './Popup.css';
import { AllMenuContext } from '../AllMenuContext';

function Popup({closePopup, currentDish, addToCartHandler}) {
    const allMenus = useContext(AllMenuContext)

    let dishDetails = allMenus.filter((menuItem)=>{
        return menuItem.strMeal === currentDish
    }).map((item)=>{
        return(
            <div className="popup-content-data">
                <div className="popup-header">
                    <img src={item.strMealThumb} alt="item" />
                    <h5 className="popup-header-category">{item.strCategory}</h5>
                </div>                
                <h2>{item.strMeal}</h2>

                <p>{item.strInstructions}</p>

                <ul className="dish-ingredients">
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                    <li>{item.strIngredient5}</li>
                    <li>{item.strIngredient6}</li>
                </ul>

                <h4>₹ 235/-</h4>
                <button onClick={()=>addToCartHandler(item.strMealThumb, item.strMeal)}>Add to Cart</button>                             
                <h5 className="popup-close" onClick={closePopup}>Close</h5>
            </div>
        )
    })
    return (
        <div className="popup"> 
            <div className="popup-content">
                {dishDetails}   
            </div>
        </div>
    )
}

export default Popup
