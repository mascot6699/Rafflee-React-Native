import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware}  from 'redux'
import apiMiddleware from './app/middleware/api'
import AppNavigator from './app/navigators/AppNavigator'
import AppReducer from './app/reducers/index'

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);


export default class App extends Component{
  render(){
    return (
        <Provider store = {createStoreWithMiddleware(AppReducer)}>
              <AppNavigator/>
        </Provider>
    );
  }
}