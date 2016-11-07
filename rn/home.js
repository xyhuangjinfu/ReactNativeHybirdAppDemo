'use strict'

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ToastAndroid
} from 'react-native';

import ImagePickerModule from './MyNativeModules'; 

let searchContent;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.jumpToLocation = this.jumpToLocation.bind(this);
        this.jumpToScan = this.jumpToScan.bind(this);
        this.jumpToSearch = this.jumpToSearch.bind(this);
        this.scan = this.scan.bind(this);
    }
    

    render() {
        return (
            <View style={{height: 50, flexDirection:'row'}}>
                <Text style={{flex:1, backgroundColor: '#00ff00', justifyContent:'center'}} onPress={this.jumpToLocation}>定位</Text>
                <View style={{flex:3, flexDirection:'row'}}>
                    <TextInput style={{flex:3}} placeholder="请输入搜索内容" onChangeText={(text)=>searchContent=text}></TextInput>
                    <Text style={{flex:1, backgroundColor: '#ff0000'}} onPress={this.jumpToSearch}>搜索</Text>
                </View>
                <Text style={{flex:1, alignItems:'flex-end', backgroundColor: '#00ff00'}} onPress={this.jumpToScan}>扫一扫</Text>
            </View>
            );
    }


    jumpToLocation() {
        ToastAndroid.show("定位", ToastAndroid.SHORT);
    }

    async jumpToScan() {
        ToastAndroid.show("扫码", ToastAndroid.SHORT);
        this.scan().then(
            (imgPath)=>ToastAndroid.show("路径: " + imgPath, ToastAndroid.SHORT), 
            (error)=>ToastAndroid.show("错误", ToastAndroid.SHORT));
    }

    async scan () {
        return await ImagePickerModule.pickImage();
    }

    jumpToSearch() {
        ToastAndroid.show("搜索: " + searchContent, ToastAndroid.SHORT);
    }
    
}


export default Home;