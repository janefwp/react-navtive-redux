import {createStore, combineReducers} from 'redux'
import { cartItemreducers } from './reducers'



const reducer = combineReducers({
    cartItems: cartItemreducers,
})

const store = createStore(cartItemreducers)
export default store