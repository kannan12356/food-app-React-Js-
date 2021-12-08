import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import FilterDishes from '../FilterDishes/FilterDishes';

function Menus() {
    const [menu, setMenu] = useState([]);
    const [menuCategories, setMenuCategories] = useState([]);

    const fetchData = () => {
        return fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
        .then((response) => response.json())
        .then((data) => setMenu(data.meals)            
        );        
    }

    const fetchCategoryData = () => {
        return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((categoriesData) => setMenuCategories(categoriesData.categories)            
        );        
    }


    useEffect(()=>{    
        fetchData();
        fetchCategoryData();
    }, []);

    return (
        <div>
            <Home/>
            <SpecialDishes specialMenu={menu}/>
            <FilterDishes categoryMenu={menuCategories} allMenus={menu}/>
        </div>
    )
}

export default Menus
