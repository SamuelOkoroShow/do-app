'use strict';
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
}
from 'react-native';

var Nav = require("./Helpers/nav");
var Icon = require('react-native-vector-icons/Ionicons');

class Create extends Component {
    constructor() {
        super();
       
    }
    
    badge(){
    return(
        <View style={{flex:1,height:200}}>
    <View style={{flex:1,height:null,width:null, alignItems:'center', backgroundColor:'#f8f8f9', justifyContent:'center'}}>
        <Text style={{color:'#444', fontWeight:'200', backgroundColor:'rgba(0,0,0,0)',fontSize:35,}}>Add Title</Text>
        <Text style={{color:'#bcbcbe',fontSize:11,backgroundColor:'rgba(0,0,0,0)'}}>ADD DESCRIPTION</Text>
        </View>
        
        
        </View>
       
    )
    }
    
    render(){
    return(
        <View>
    <Nav title={{val:'Create New'}}/>
        {this.badge()}
     <View style={{height:80, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#f3f3f3', flexDirection:'row', justifyContent:'space-between'}}>
        <View><Text style={{color:'#B0B0B0', marginLeft:10, marginBottom:5}}>
        Date
        </Text>
        <Text style={{color:'#5A595E',marginLeft:10}}>Thursday, February 11, 2016
        </Text>
        </View>
         <Icon name="ios-plus-empty" size={35} color="#4FD2C2" 
        style={{marginRight:20}}
        /> 
        </View>
         <View style={{height:80, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#f3f3f3', flexDirection:'row', justifyContent:'space-between'}}>
        <View><Text style={{color:'#B0B0B0', marginLeft:10, marginBottom:5}}>Time
        </Text>
        <Text style={{color:'#5A595E',marginLeft:10}}>9:00AM
        </Text>
        </View>
         <Icon name="ios-plus-empty" size={35} color="#4FD2C2" 
        style={{marginRight:20}}
        /> 
        </View>
         <View style={{height:80, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#f3f3f3', flexDirection:'row', justifyContent:'space-between'}}>
        <View><Text style={{color:'#B0B0B0', marginLeft:10, marginBottom:5}}>
        Location
        </Text>
        <Text style={{color:'#5A595E',marginLeft:10}}>Starbucks</Text>
        </View>
         <Icon name="ios-paperplane-outline" size={35} color="#4FD2C2" 
        style={{marginRight:20}}
        /> 
        </View>
        <View style={{height:80, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#f3f3f3', flexDirection:'row', justifyContent:'space-between'}}>
        <View><Text style={{color:'#B0B0B0', marginLeft:10, marginBottom:5}}>
        Repeat
        </Text>
        <Text style={{color:'#5A595E',marginLeft:10}}>Monthly</Text>
        </View>    
        </View>
        <View style={{height:80, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#f3f3f3', flexDirection:'row', justifyContent:'space-between'}}>
        <View>
        <Text style={{color:'#B0B0B0',marginLeft:10}}>Add People</Text>
        </View>
        </View>
        
</View>
    );
    }
    
        
    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
  

});

module.exports = Create;