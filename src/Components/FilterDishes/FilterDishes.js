import React, { useState, useEffect, useContext } from 'react';
import './FilterDishes.css';
import { AllMenuContext } from '../AllMenuContext';
import CardDishes from '../CardDishes/CardDishes';
import Pagination from '../Pagination/Pagination';

function FilterDishes() {
    
    const allMenus = useContext(AllMenuContext);

    //menu categories
    const [menuCategories, setMenuCategories] = useState([]);
    
    //active dishes
    const [activeDish, setActiveDish] = useState('Beef');

    //categorised dishes
    const [categorisedDishes, setCategorisedDishes] = useState([])

    const [singleCategoryData, setSingleCategoryData] = useState([]);

    //current page number
    const [currentPage, setCurrentPage] = useState(1);



    const fetchCategoryData = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((categoriesData) => setMenuCategories(categoriesData.categories)            
        );        
    }

    const fetchSingleCategoryData = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")  
        .then((response) => response.json())
        .then((singleDishCategoryData) => setSingleCategoryData(singleDishCategoryData.meals)            
        );
    }

    useEffect(()=>{    
        fetchCategoryData();
        fetchSingleCategoryData();
    }, []);

    let itemsPerPage = 4;

    let indexOfLastDish = currentPage * itemsPerPage;

    let indexOfFirstDish = indexOfLastDish - itemsPerPage;

    let showTheseDishes = categorisedDishes.slice(indexOfFirstDish, indexOfLastDish);

    const showFilteredDishes = (category)=>{        
        let filteredDishes = allMenus.filter((item)=>{
            return item.strCategory === category
        })
        setCategorisedDishes(filteredDishes);    
        setActiveDish(category);
        setSingleCategoryData([]);
    }

        
    let singleData = singleCategoryData.map((item, index)=>{
        if(index > 3){
            return '';
        }
        return (
            <CardDishes 
                key={index}
                imgSrc={item.strMealThumb}
                mealName={item.strMeal}
            />                                    
        )
    })
    

    return (
        <div className="filtered-dishes">
            <h2>Chose your dishes</h2>

            <div className="filtered-dishes">
                <ul className="category-menu">
                    {
                        menuCategories.map((categoryItem, index)=>{
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
                    {singleData}
                    {   
                        singleData.length > 0 || categorisedDishes.length > 0 ?
                            showTheseDishes.map((item, index)=>{
                                return (
                                    <>
                                    <CardDishes 
                                        key={index}
                                        imgSrc={item.strMealThumb}
                                        mealName={item.strMeal}
                                    />  
                                    </>
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
                    setCurrentPage = {setCurrentPage}
                />
            </div>
        </div>
    )
}

export default FilterDishes
