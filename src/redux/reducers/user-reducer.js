import userActionTypes from '../actions/user-action-types';

const INITIAL_STATE = {
    currentUser:null,
}

const userReducer = (state=INITIAL_STATE,{type,payload}) =>{

switch(type){
    case userActionTypes.SET_CURRENT_USER:
        return{
            ...state,
            currentUser:payload
        }

    default:
        return state;
}

}

export default userReducer;