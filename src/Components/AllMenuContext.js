import React, { useEffect, useState } from 'react';
import Loader from '../Loader';

export const AllMenuContext = React.createContext();

const AllMenus = (props)=>{
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
        .then((response) => response.json())
        .then((data) => {setMenu(data.meals)})
        setLoading(false)
    }
    
    useEffect(()=>{    
        fetchData();
    }, []);

    return(
        <AllMenuContext.Provider value={menu}>
            {!loading ? props.children : <Loader/>}
        </AllMenuContext.Provider>
    )
    
}

export default AllMenus;