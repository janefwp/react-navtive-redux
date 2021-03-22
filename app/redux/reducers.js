import React from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART } from './constants'


const initalState = []
export const cartItemreducers=(state=initalState, action) => {
    
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.id != action.payload.id)
        default:
            return state
    }

}

