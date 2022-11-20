import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
import { productsReducer, productsDetailsReducer } from './reducer/productReducer';

const reducer= combineReducers ({
    products:productsReducer,
    productDetails:productsDetailsReducer
})

let intialState={}

const middleware= [thunk]
const store = createStore (reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;