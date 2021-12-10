import React, { useContext } from 'react';
import './Checkout.css';
import { DispatchContext, StateContext } from '../../Context/AppProvider';

function Checkout() {

    const cartPackage = useContext(StateContext);

    const dispatch = useContext(DispatchContext);

    return (
        <div className="checkout">
            <h2>Order Now</h2>
            
            <div className="checkout-items">
                {   
                    cartPackage.cartItems.map((items, k)=>{
                        return(
                            <div className="checkout-item" key={k}>
                                <img src={items.img} alt="checkout item"/>
                                <h3>{items.title}</h3>
                                <button 
                                    onClick={()=>dispatch({type: "remove-from-cart", payload: k})} 
                                    className="remove-cart-checkout-btn">
                                    Remove from Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Checkout
