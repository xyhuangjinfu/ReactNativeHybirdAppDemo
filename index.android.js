'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToastAndroid
} from 'react-native';

import MyComponent00 from './rn/MyComponent00';
import MyComponent01 from './rn/MyComponent01';
import MyComponent02 from './rn/MyComponent02';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.renderByType = this.renderByType.bind(this);
    this.getComponent00 = this.getComponent00.bind(this);
    this.getComponent01 = this.getComponent01.bind(this);
    this.getComponent02 = this.getComponent02.bind(this);
  }

  render() {
    const routes = [
      { name: 'component 00', key: 0 },
      { name: 'component 01', key: 1 },
      { name: 'component 02', key: 2 }
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderByType}
        />
    );
  }

  renderByType(route, navigator) {
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
        jumpTo01={() => navigator.push({ name: 'component 01', key: 1 })}
        jumpTo02={() => navigator.push({ name: 'component 02', key: 2 })}
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


  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.hello}>Hello, World, what happend!</Text>
  //       <Text style={styles.hello}>Hello, World, dadada!</Text>
  //       <Text style={styles.hello}>Hello, World, qqqqq!</Text>
  //       <Text style={styles.hello}>Hello, World, {this.props.key_data}</Text>
  //     </View>
  //   )
  // }
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