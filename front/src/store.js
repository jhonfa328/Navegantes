import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
import { productsReducer, productsDetailsReducer } from './reducer/productReducer';


const reducer= combineReducers ({
    products:productsReducer,
    productDetails:productsDetailsReducer
})

let intialState={
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middleware= [thunk]
const store = createStore (reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;