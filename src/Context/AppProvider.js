import React, { useReducer } from 'react';

const DispatchContext = React.createContext();
const StateContext = React.createContext();

const AppProvider = (props) => {

    const initialState = {
        "cartItems" : []
    }

    const reducer = (state, action) =>{
        switch (action.type) {
            case "add-to-cart":
                return { ...state, "cartItems": [...state.cartItems, action.payload]}
            
            case "remove-from-cart":   
                let newCart = [...state.cartItems]
                if(action.payload >= 0){
                    newCart.splice(action.payload, 1);
    
                } else{
                    console.warn(`Cna't remove product (id: ${action.payload} as its not in basket!)`)
                }
                return { ...state, "cartItems":  newCart}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return(
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )

}

export { AppProvider, DispatchContext, StateContext };