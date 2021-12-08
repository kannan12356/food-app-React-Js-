import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import './FilterDishes.css'

function FilterDishes(props) {    
    const [categorisedDishes, setCategorisedDishes] = useState([])
    const [activeDish, setActiveDish] = useState('Beef');
    const [currentPage, setCurrentPage] = useState(1);
    
    let itemsPerPage = 4;

    let indexOfLastDish = currentPage * itemsPerPage;

    let indexOfFirstDish = indexOfLastDish - itemsPerPage;

    let showTheseDishes = categorisedDishes.slice(indexOfFirstDish, indexOfLastDish);

    let singleCategoryData = props.singleCategoryData.map((item, index)=>{
        return (
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
    

    const showFilteredDishes = (category)=>{        
        let filteredDishes = props.allMenus.filter((item)=>{
            return item.strCategory === category
        })
        setCategorisedDishes(filteredDishes);    
        setActiveDish(category);
        props.setSingleCategoryData([]);
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
                                    className={`category-item ${activeDish === categoryItem.strCategory ? 'active' : null}`}>
                                    {categoryItem.strCategory}
                                </li>
                            )
                        })   
                    }
                </ul>
            </div>
            <div className="special-dishesMenu">
                <ul className="dish-menu">
                    {singleCategoryData}
                    {   
                        singleCategoryData.length > 0 || categorisedDishes.length > 0 ?
                            showTheseDishes.map((item, index)=>{
                                return (
                                    <li key={index} className="dish-item">
                                        <img 
                                            className="dish-img"
                                            src={item.strMealThumb} 
                                            alt="dishes" 
                                        />
                                        <h4>{item.strMeal}</h4>
                                    </li>
                                )
                            
                            }) :
                            <div className="alert"> 
                                <h2>Sorry, No items found</h2>
                                <h4>Please try another dishes</h4>
                            </div>
                            
                    }
                </ul>
                <Pagination 
                    categoryDishes={categorisedDishes}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage = {setCurrentPage}
                />
            </div>
        </div>
    )
}

export default FilterDishes
