'use strict'

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ToastAndroid,
  ScrollView,
  Image
} from 'react-native';

import FinishActivityModule from './FinishActivityModule'; 

let content;

class GetData extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <View>
                <TextInput placeholder='lllllddddd' onChangeText={(text)=>content=text}></TextInput>
                <Text onPress={()=>FinishActivityModule.finishActivity({data:content})}>确定</Text>
            </View>
            );
    }

   
    
}


export default GetData;