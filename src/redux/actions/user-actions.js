import userActionTypes from './user-action-types'


const setCurrentUser = user =>({
    type:userActionTypes.SET_CURRENT_USER,
    payload: user
})


export default setCurrentUser;