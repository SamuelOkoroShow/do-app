
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Image,
    Text,
    View
}
from 'react-native';

var Nav = require("./Helpers/nav");
var TaskStats = require("./Helpers/taskStats");
var Icon = require('react-native-vector-icons/Ionicons');
var profileImg = require('image!profile');

class Profile extends Component {
    constructor() {
        super();
    }
    
    badge(){
    return(
    <View style={styles.badge}>
        <Image source = {profileImg} style={{height:70, margin:10}} resizeMode='contain' />
        <Text style={{color:'#222', margin:5, fontSize:22, fontWeight:'300'}}>Good Job Marie!</Text>
        <Text style={{color:'#999', margin:5}}>You havent missed any tasks this week!</Text>
        </View>
    );
    }
    render(){
    return(
        <View style={styles.container}>
        <Nav title ={{val:"Profile"}} />
        {this.badge()}
        <TaskStats />
        
        </View>
    );
    }
}
        
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        badge:{
        height:180,
            alignItems:'center',
            justifyContent:'center'
        }

    });

module.exports = Profile;