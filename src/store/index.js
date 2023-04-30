import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authenticationReducer from './authentication';


const store = configureStore({
    reducer : { counter :counterReducer, auth : authenticationReducer}
});


export default store;