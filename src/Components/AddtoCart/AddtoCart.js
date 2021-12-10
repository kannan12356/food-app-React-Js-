import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DispatchContext, StateContext } from '../../Context/AppProvider';
import './AddtoCart.css'

function AddtoCart({addToCartItem}) {

    const cartPackage = useContext(StateContext);

    const dispatch = useContext(DispatchContext);

    return (
        <div className="add-to-cart">
            <Link to="/checkout">
                <h6>Your Cart</h6>
                {
                    cartPackage.cartItems.map((items, k)=>{
                        return(
                            <div className="add-to-cart-item" key={k}>
                                <img src={items.img} alt="cart item"/>
                                <h6>{items.title}</h6>
                                <button onClick={()=>dispatch({type: "remove-from-cart", payload: k})} className="remove-cart-btn">Remove from Cart</button>
                            </div>
                        )
                    })
                }            
            </Link>
        </div>
    )
}

export default AddtoCart
