import React, { useContext, useState } from 'react';
import CardDishes from '../CardDishes/CardDishes';
import Popup from '../Popup/Popup';
import './SpecialDishes.css';
import { AllMenuContext } from '../AllMenuContext';
import AddtoCart from '../AddtoCart/AddtoCart';

function SpecialDishes() {
    
    const allMenus = useContext(AllMenuContext);
    
    const [showPopup, setShowPopup] = useState(false);
    const [currentDish, setCurrentDish] = useState('');

    const [addToCartItem, setAddToCartItem] = useState([])

    const showPopupHandler = (dishName)=>{
        setShowPopup(true)
        setCurrentDish(dishName);
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    const addToCartHandler = (addToCartImg, addToCartTitle) => {
        setAddToCartItem([
            ...addToCartItem,
            {
                "img" : addToCartImg,
                "title" : addToCartTitle
            }
        ]);
    }

    return (
        <>
            {
                showPopup && <Popup 
                        closePopup={closePopup} 
                        currentDish={currentDish}
                        addToCartHandler={addToCartHandler}
                    />
            }            

            <AddtoCart addToCartItem={addToCartItem}/>
            <div className="special-dishes">
                <h2>Our Special Dishes</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
            </div>
            <div className="special-dishesMenu">
                <ul className="dish-menu">
                    {
                        allMenus.map((item, index)=>{
                            if(index > 7){
                                return '';
                            }
                            return(      
                                <CardDishes 
                                    key={index}
                                    imgSrc={item.strMealThumb}
                                    mealName={item.strMeal}
                                    showPopup={showPopupHandler}
                                />
                            )
                                                       
                        })
                    }                    
                </ul>
            </div>
            
        </>
    )
}

export default SpecialDishes
