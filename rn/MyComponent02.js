'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';

class MyComponent02 extends React.Component {

constructor(props) {
super(props);

this.jumpToNativeActivity = this.jumpToNativeActivity.bind(this);
}

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.back}>
          <Text style={styles.hello}>Component 02 ! \n 点击我返回上个界面</Text>
        </TouchableHighlight>


        <TouchableHighlight onPress={this.jumpToNativeActivity}>
            <Text style={styles.hello}>Component 02 ! \n 点击我启动Native Activity</Text>
        </TouchableHighlight>
      </View>
    )
  }

  jumpToNativeActivity() {
  ToastAndroid.show('点击我启动Native Activity', ToastAndroid.SHORT);
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

export default MyComponent02;