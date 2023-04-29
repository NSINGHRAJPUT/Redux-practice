import {createStore} from 'redux';

const redux = require('redux');

const counterReducer = (state = { counter : 0 } , action) =>{
    if(action.type === 'increment'){
        return {
            counter : state.counter+action.value
        }
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter-action.value
        }
    }
    return state;
}

const store = redux.createStore(counterReducer);

export default store;