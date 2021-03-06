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

import ImagePickerModule from './ImagePickerModule'; 
import StartActivityModule from './StartActivityModule'; 

let searchContent;

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {'advertisements':[]};

        this.jumpToLocation = this.jumpToLocation.bind(this);
        this.jumpToScan = this.jumpToScan.bind(this);
        this.jumpToSearch = this.jumpToSearch.bind(this);
        this.scan = this.scan.bind(this);
        this.loadAdvertisement = this.loadAdvertisement.bind(this);
        this.getAdvertisementUrls = this.getAdvertisementUrls.bind(this);
        this.getAdvertisementView = this.getAdvertisementView.bind(this);

        this.loadAdvertisement();
    }
    

    render() {
        return (
            <ScrollView>

            {/* 顶部标题栏  */}
            <View style={{height: 50, flexDirection:'row'}}>
                <Text style={{flex:1, backgroundColor: '#00ff00', justifyContent:'center'}} onPress={this.jumpToLocation}>定位</Text>
                <View style={{flex:3, flexDirection:'row'}}>
                    <TextInput style={{flex:3}} placeholder="请输入搜索内容" onChangeText={(text)=>searchContent=text}></TextInput>
                    <Text style={{flex:1, backgroundColor: '#ff0000'}} onPress={this.jumpToSearch}>搜索</Text>
                </View>
                <Text style={{flex:1, alignItems:'flex-end', backgroundColor: '#00ff00'}} onPress={this.jumpToScan}>扫一扫</Text>
            </View>

			{/* 广告栏  */}
            <ScrollView style={{height: 200}} horizontal={true}>{this.getAdvertisementView()}</ScrollView>

            </ScrollView>
            );
    }

    getAdvertisementView() {
        let adViews = [];
        let i;
        for(i=0; i<this.state.advertisements.length; i++) {
            let ad = this.state.advertisements[i];
            if (typeof ad !== 'undefined') {
                adViews.push(
                    <TouchableHighlight  key={i}  onPress={()=>ToastAndroid.show("广告详情:" + ad.adTitle, ToastAndroid.SHORT)}>
                        <Image style={{height: 300, width:300}} source={{uri:ad.adPathPic}} onPress={this.jumpToAdvertisementDetail}></Image>
                    </TouchableHighlight>
                    );
            }        
        } 
        return adViews;
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
        let url = "http://api.1949hk.com/HealthManagerAPI/appAd/queryList";
        let method = { method: 'POST', 
                        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'devicetype':'android', 'version':'2.0.0'},
                        body:JSON.stringify({currentStatus:1, adLocation:1})};
        fetch(url, method)
            .then((response)=>response.json())
            .then(this.getAdvertisementUrls);
    }

    getAdvertisementUrls(responseJson) {
        ToastAndroid.show(JSON.stringify(responseJson), ToastAndroid.SHORT)
        this.setState({'advertisements':responseJson.data});
    }
    
}


export default Home;