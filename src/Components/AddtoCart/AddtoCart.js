import React from 'react';
import './AddtoCart.css'

function AddtoCart({addToCartItem}) {
    return (
        <div className="add-to-cart">
            <h6>Your Cart</h6>
            {                   
                addToCartItem.map((item,index)=>{
                    return(
                        <div className="add-to-cart-item">
                            <img src={item.img} alt="cart item"/>
                            <h6>{item.title}</h6>
                        </div>
                    )
                })
            }            
        </div>
    )
}

export default AddtoCart
