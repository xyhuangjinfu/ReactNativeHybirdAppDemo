'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class MyComponent00 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.jumpTo01}>
          <Text style={styles.hello}>跳转到 Component 01 !</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.jumpTo02}>
          <Text style={styles.hello}>跳转到 Component 02 !</Text>
        </TouchableHighlight>
      </View>
    )
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

export default MyComponent00;