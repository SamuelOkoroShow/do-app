
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
}
from 'react-native';

import Swiper from 'react-native-swiper'
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Icon = require('react-native-vector-icons/Ionicons');
var Login =  require("./monthView");



class Overview extends Component {
    constructor() {
        super();
        
    }
  render() {
    return (
       <View style={styles.container}>
         
  <View style={styles.title}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('image!menu')} resizeMode={'contain'} style={styles.menu}/>
        <Text style={styles.titleTxt}>Overview</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Icon name="ios-plus-empty" size={27} color="#999" style={{margin:10, alignSelf:'center'}} /> 
           <Icon name="ios-search" size={23} color="#999" style={{margin:10, alignSelf:'center'}} /> 
        </View>
        </View>
    
      <ScrollableTabView 
           tabBarPosition = "top"
        style={{color:'#fff', backgroundColor:'#333'}}
        tabBarInactiveTextColor="white"
       
           >
        <Login tabLabel="DAY"    />
        <Login  tabLabel="WEEK" tabBarInactiveTextColor="white" />
        <Login tabLabel="MONTH" />
      </ScrollableTabView>
                </View>
                    
    );
  }
}const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    titleTxt:{
    alignSelf:'center',
        fontSize:16,
        color:'#3D3C41'
    },
    
    title: {
        marginTop:10,
        height: 60,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#f7f7f7'
    },
    menu: {
        width: 15,
        alignSelf: 'center',
        margin: 15
    },
    walk: {
        width: 300
    },

    close: {
        width: 20,
        alignSelf: 'center',
        margin: 20
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',

    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
module.exports = Overview;
