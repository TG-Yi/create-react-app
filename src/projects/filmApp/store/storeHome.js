import {createStore} from 'redux';
import React, {Component} from 'react';

var initialState = {
    app:"111111111"
};

const reducer = (state=initialState, action) => {
    if( action && action.type ) {
        state[action.type] = action[action.type];
        return {...state};
    }
    
};
const reduxStore = createStore(reducer)

export {
    reduxStore,
};