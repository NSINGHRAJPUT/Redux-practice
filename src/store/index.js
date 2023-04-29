import {createStore} from 'redux';

const redux = require('redux');
const initialState = { counter : 0,showCounter: true };

const counterReducer = (state = initialState , action) =>{
    if(action.type === 'increment'){
        return {
            counter : state.counter+action.value,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter-action.value,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return {
            showCounter : !state.showCounter,
            counter : state.counter
        }
    }
    return state;
}

const store = redux.createStore(counterReducer);

export default store;