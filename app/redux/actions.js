import React from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART } from './constants'



export const addToCart =(item) =>{
    return {
        type: ADD_TO_CART,
        payload: item,
    }       

}

export const removeItemFromCart = (item) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: item,
    }
}

