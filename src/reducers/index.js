import {combineReducers} from 'redux'; 
import {processStepsReducer, findProcessReducer} from './ourProcessReducers';
import {sendMessageReducer} from './sendMessageReducers';
import {FetchMembersReducer} from './teamMembersReducer';
import {loginReducer} from './loginReducer';
import {peopleReducer} from './peopleReducer';

export const reducers = combineReducers({
    steps: processStepsReducer,
    process: findProcessReducer,
    message: sendMessageReducer,
    team: FetchMembersReducer,
    login: loginReducer,
    member: peopleReducer,
})
