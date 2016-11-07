'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToastAndroid,
  BackAndroid,
  BackPressEventName
} from 'react-native';

import MyComponent00 from './rn/MyComponent00';
import MyComponent01 from './rn/MyComponent01';
import MyComponent02 from './rn/MyComponent02';
import Home from './rn/home';


var _navigator;

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.renderByType = this.renderByType.bind(this);
    this.getComponent00 = this.getComponent00.bind(this);
    this.getComponent01 = this.getComponent01.bind(this);
    this.getComponent02 = this.getComponent02.bind(this);
    this.onBackPress = this.onBackPress.bind(this);

    this.state = {
      "routes": [
        {
          "name": "component00",
          "key": 0
        },
        {
          "name": "component01",
          "key": 1
        },
        {
          "name": "component02",
          "key": 2
        }
      ]
    };
  }

  componentWillMount() {
    BackAndroid.addEventListener(BackPressEventName, this.onBackPress);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener(BackPressEventName, this.onBackPress);
  }

  onBackPress() {
    if (_navigator == null) {
      return false;
    }
    if (_navigator.getCurrentRoutes().length === 1) {
      return false;
    }
    _navigator.pop();
    return true;
  }

  render() {
    return (
      <Navigator
        initialRoute={this.state.routes[0]}
        initialRouteStack={this.state.routes}
        renderScene={this.renderByType}
        />
    );
  }

  renderByType(route, navigator) {
    _navigator = navigator;
    if (route.key == 0) {
      return this.getComponent00(navigator);
    } else if (route.key == 1) {
      return this.getComponent01(navigator);
    } else if (route.key == 2) {
      return this.getComponent02(navigator);
    }
  }


  getComponent00(navigator) {
    return (
      <MyComponent00
        jumpTo01={() => { navigator.push(this.state.routes[1]); } }
        jumpTo02={() => { navigator.push(this.state.routes[2]); } }
        />
    );
  }

  getComponent01(navigator) {
    return (
      <MyComponent01 back={() => {
        ToastAndroid.show("click 01", ToastAndroid.SHORT);
        navigator.pop();
      } } />
    );
  }

  getComponent02(navigator) {
    return (
      <MyComponent02 back={() => {
        ToastAndroid.show("click 02", ToastAndroid.SHORT);
        navigator.pop();
      } } />
    );
  }

}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
AppRegistry.registerComponent('Home', () => Home);