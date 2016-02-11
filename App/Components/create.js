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

class Create extends Component {
    constructor() {
        super();
       
    }
    
    badge(){
    return(
        <View style={{height:200}}>
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