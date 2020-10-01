import axios from 'axios';

import actionTypes from './actionTypes';

export const selectProcess = (process) => {
    return {
        type: actionTypes.selectedProcess,
        payload: process
    }
};

export const findProcess = (id) => {
    return {
        type: actionTypes.findProcess,
        payload: id,
    }
}

const fetchPeople = async () => {
    const data = await axios.get(`${actionTypes.BACK_END_BASE_URL}/people`);
    return data;
}

export const sendMessageAction = (userInput) => async dispatch => {
    const data = await axios.post(`${actionTypes.BACK_END_BASE_URL}/contact`, userInput);
    dispatch({type: actionTypes.sendMessage, payload: data});
   }

export const fetchMembers = () => async dispatch => {
    const data = await fetchPeople();
    dispatch({type: actionTypes.members, payload: data});
}

export const fetchDepartment = (department) => async dispatch => {
    const data = await fetchPeople();
    const departmentMembers = data.data.filter(member => member.department.toLowerCase() === department.toLowerCase());
    dispatch({type: actionTypes.department, payload: departmentMembers});
}

export const login =  (userInput) => async (dispatch) => {
    try{
    const data = await axios.post(`${actionTypes.BACK_END_BASE_URL}/login`, userInput);
    dispatch({type: actionTypes.login, payload: data});
   
    } catch(err){
    console.log('err', err);
    //   dispatch({type: actionTypes.login_error, payload: err});
    }
    
}


export const addMemberAction = (userInput) => async dispatch => {
    const data = await axios.post(`${actionTypes.BACK_END_BASE_URL}/people`, userInput);
    console.log('data ----', data);
    dispatch({type: actionTypes.addMember, payload: data});
   }
