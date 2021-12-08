import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import FilterDishes from '../FilterDishes/FilterDishes';
import Loader from '../../Loader';

function Menus() {
    const [menu, setMenu] = useState([]);
    const [menuCategories, setMenuCategories] = useState([]);
    const [singleCategoryData, setSingleCategoryData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
        .then((response) => response.json())
        .then((data) => {setMenu(data.meals)})
        setLoading(false)
    }

    const fetchCategoryData = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((categoriesData) => setMenuCategories(categoriesData.categories)            
        );        
    }

    const fetchSingleCategoryData = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
        .then((response) => response.json())
        .then((categoriesData) => setSingleCategoryData(categoriesData.meals)            
        );        
    }


    useEffect(()=>{    
        fetchData();
        fetchCategoryData();
        fetchSingleCategoryData();
    }, []);

    return (
        <div>
            <Home/>
            {
                !loading === true ? <SpecialDishes specialMenu={menu}/> : <Loader/>
            }
            {
                !loading === true ? <FilterDishes 
                                        categoryMenu={menuCategories} 
                                        singleCategoryData={singleCategoryData} 
                                        allMenus={menu}
                                        setSingleCategoryData={setSingleCategoryData}
                                    /> : null
            }
        </div>
    )
}

export default Menus
