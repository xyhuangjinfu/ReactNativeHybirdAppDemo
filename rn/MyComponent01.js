'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class MyComponent01 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.back}>
          <Text style={styles.hello}>Component 01 !  点击我返回上个界面</Text>
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

export default MyComponent01;