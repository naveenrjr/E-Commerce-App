import {combineReducers} from 'redux';
import userReducer from './reducers/user-reducer'
import CartReducer from './reducers/cart-reducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DirectoryReducer from './reducers/directory-reducer';
import ShopReducer from './reducers/shop-reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:DirectoryReducer,
    shop:ShopReducer,

})

export default persistReducer(persistConfig,rootReducer);