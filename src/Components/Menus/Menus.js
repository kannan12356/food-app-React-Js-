import React from 'react';
import Home from '../Home/Home';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import FilterDishes from '../FilterDishes/FilterDishes';
import Header from '../Header/Header';
import AllMenus from '../AllMenuContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from '../Checkout/Checkout';


function Menus() {
    return (
        <div>
            <Router>
                <Header/>
                <Home/>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <AllMenus>
                                <SpecialDishes/>
                                <FilterDishes/> 
                            </AllMenus>
                        } 
                    />
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
            </Router>
            
        </div>
    )
}

export default Menus
