
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
var Icon = require('react-native-vector-icons/Ionicons');
var TodoTab = require('./todo');
var API = require('./../Utils/todoAPI');

class Month extends Component {
    constructor() {
        super();
        console.log('whors');
    }
  render() {
      API.addTodo("Sam","sfafsaf");
    return (
      
  <View style={styles.container}>
  <View style={{height:80, backgroundColor:'#f3f3f3', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
         <Icon name="ios-arrow-left" size={23} color="#333" style={{margin:15, alignSelf:'center'}} /> 
        <Text style={{fontSize:18, color:'#333'}}>Februray</Text>
        <Icon name="ios-arrow-right" size={23} color="#333" style={{margin:15, alignSelf:'center'}} /> 
        </View>
        <View style={{height:130, flexDirection:'row', alignItems:'center'}}>
        <View style={{backgroundColor:'#4FD2C2', flex:1, alignItems:'center'}}>
        <View style={styles.taskBox}>
        <Text style={styles.taskText}>COMPLETED</Text>
        <Text style={styles.taskBig}>64</Text>
        </View>
        </View>
        <View style={{backgroundColor:'#D667CD', flex:1, alignItems:'center'}}>
        <View style={styles.taskBox}>
        <Text style={styles.taskText}>OVERVIEW</Text>
        <Text style={styles.taskBig}>5</Text>
        </View>
        </View>
        
        </View>
        
        <View style={styles.rowz}>
                   <View style={{flexDirection:'row'}}><Text style={{fontSize:18, color:'#454449', margin:25, marginRight:3, alignSelf:'center'}}>2:30</Text>
                       <Text style={{fontWeight:'100', color:'#454449', fontSize:11, alignSelf:'center',marginTop:5}}>PM</Text></View>
                   <View>
                           <Text style={{fontSize:16, color:'#454449', margin:25,marginBottom:3, alignSelf:'flex-start'}}>New Icons</Text>
                           <Text style={{fontSize:16,color:'#A7A7A7', margin:25, marginTop:0, alignSelf:'center'}}>Mobile App</Text>
                           </View>
                   <View style={{flexDirection:'row',}}><Image source={require('image!green')} resizeMode={'contain'} style={{width:10, alignSelf:'center', margin:25,}}/>
                               </View>
                   </View>
    <TodoTab 
time ={{value:"HI", surfix:'PM'}}
title={{main:"", sub:'hhafad'}}
    
    />
       
      </View>                  
    );
  }
}const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    cal: {
        width: 160,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    temp: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 25

    },
    midTxt: {
        flex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#fff',
        fontSize: 65,
        fontWeight: '300'
    },
    midTxtS: {
        flex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#fff',
        fontSize: 12,
        fontWeight: '200'
    },
    prof: {
        width: 30,
        margin: 12,
        marginTop: 5
    },
    menu: {
        width: 21,
        margin: 12,
        marginTop: 20

    },
    walk: {
        width: 300
    },
    row1: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
       rowz:{
     height:80,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        justifyContent: 'space-between',
    },
    row2: {
        flex: 8
    },
    row3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    close: {
        width: 20,
        alignSelf: 'center',
        margin: 20
    },
    taskText: {
        color: '#fff',
        fontSize: 12,
        fontWeight:'500'
    },
    taskBig: {
        color: '#fff',
        fontSize: 38
    },
    taskBox: {
        alignItems: 'center',
        flex: 1,
        margin:35,
    }

});
module.exports = Month;
