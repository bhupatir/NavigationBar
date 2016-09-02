import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './components/Router'

class reactTutorialApp extends Component {
   render() {
      return (
         <Router />
      )
   }
}

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)
