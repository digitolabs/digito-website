import actionTypes from '../actions/actionTypes';


 export const peopleReducer = (state={}, action) => {
    switch(action.type){
        case actionTypes.addMember:
            return {...state, data: action.payload}
        default:
            return state
    }
}