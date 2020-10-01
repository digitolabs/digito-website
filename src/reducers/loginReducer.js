import actionTypes from '../actions/actionTypes';


export const loginReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.login:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}