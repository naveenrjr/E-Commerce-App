import {combineReducers} from 'redux';
import userReducer from './reducers/user-reducer'
import CartReducer from './reducers/cart-reducer';

const rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer
})

export default rootReducer;