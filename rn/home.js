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

import ImagePickerModule from './ImagePickerModule'; 
import StartActivityModule from './StartActivityModule'; 

let searchContent;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.jumpToLocation = this.jumpToLocation.bind(this);
        this.jumpToScan = this.jumpToScan.bind(this);
        this.jumpToSearch = this.jumpToSearch.bind(this);
        this.scan = this.scan.bind(this);
        this.loadAdvertisement = this.loadAdvertisement.bind(this);

        this.loadAdvertisement();
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
        StartActivityModule.startActivity("cn.hjf.rntest.SearchActivity", {search_content:searchContent});
    }

    loadAdvertisement() {
        let url = "http://api.361health.net/HealthManagerAPI/appAd/queryList";
        let method = { method: 'POST', 
                        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'devicetype':'android', 'version':'2.0.0'},
                        body:JSON.stringify({currentStatus:1, adLocation:1})};
        fetch(url, method)
            .then((response)=>response.json())
            .then((responseJson)=>ToastAndroid.show(JSON.stringify(responseJson), ToastAndroid.SHORT));
    }
    
}


export default Home;