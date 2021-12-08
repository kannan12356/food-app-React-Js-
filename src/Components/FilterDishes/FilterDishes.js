import React, { useState } from 'react';
import './FilterDishes.css'

function FilterDishes(props) {    
    const [categorisedDishes, setCategorisedDishes] = useState([])
    

    const showFilteredDishes = (category)=>{        
        let filteredDishes = props.allMenus.filter((item)=>{
            return item.strCategory === category
        })
        setCategorisedDishes(filteredDishes);        
    }

    return (
        <div className="filtered-dishes">
            <h2>Chose your dishes</h2>

            <div className="filtered-dishes">
                <ul className="category-menu">
                    {
                        props.categoryMenu.map((categoryItem, index)=>{
                            return(
                                <li 
                                    key={index} 
                                    onClick={()=>{showFilteredDishes(categoryItem.strCategory)}}
                                    className="category-item">
                                    {categoryItem.strCategory}
                                </li>
                            )
                        })   
                    }
                </ul>
            </div>
            <div className="special-dishesMenu">
                <ul className="dish-menu">
                    {
                        categorisedDishes.map((item, index)=>{
                            return (
                                <li key={index} className="dish-item">
                                    <img 
                                        className="dish-img"
                                        src={item.strMealThumb} 
                                        alt="dishes" 
                                    />
                                    <h4>{item.strCategory}</h4>
                                </li>
                            )
                            
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FilterDishes
