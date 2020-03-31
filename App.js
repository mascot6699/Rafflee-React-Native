import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware}  from 'redux'
import apiMiddleware from './app/middleware/api'
import { navigationMiddleware } from './app/middleware/nav'
import AppNavigator from './app/navigators/AppNavigator'
import AppReducer from './app/reducers/index'

const store = createStore(AppReducer, applyMiddleware(apiMiddleware, navigationMiddleware))

export default class App extends Component{
  render(){
    return (
        <Provider store = {store}>
              <AppNavigator/>
        </Provider>
    );
  }
}