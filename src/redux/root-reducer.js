import {combineReducers} from 'redux';
import userReducer from './reducers/user-reducer'
import CartReducer from './reducers/cart-reducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer
})

export default persistReducer(persistConfig,rootReducer);