import React from 'react';
import './Pagination.css';

function Pagination(props) {
    let categoryDishes = props.categoryDishes;
    
    let pages = [];

    for (let i = 1; i <= Math.ceil(categoryDishes.length/props.itemsPerPage); i++) {
        pages.push(i)
    }

    const pageChangeHandler = (e)=>{
        props.setCurrentPage(e.target.id)
    }

    return (
        <div className="pagination"> 
            <ul className="pagination-list">
                {
                    pages.map((pageNumber, i)=>{
                        return <li  key={i}
                                    id={pageNumber} 
                                    onClick={pageChangeHandler} 
                                    className="page-number">
                                        {pageNumber}
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination
