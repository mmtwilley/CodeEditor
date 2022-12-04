import{applyMiddleware,createStore} from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { ActionType } from './action-types';

export const store = createStore(reducers,{},applyMiddleware(thunk));

const state = store.getState();



store.dispatch({
    type:ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'code'
    }
})

store.dispatch({
    type:ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'text'
    }
})

store.dispatch({
    type:ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'code'
    }
})

console.log(state)