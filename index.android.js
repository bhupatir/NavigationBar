import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './components/Router'

class Navigation extends Component {
   render() {
      return (
         <Router />
      )
   }
}

AppRegistry.registerComponent('Navigation', () => Navigation)
