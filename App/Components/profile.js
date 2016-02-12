
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Image,
    Text,
        ListView,
    View
}
from 'react-native';

var Nav = require("./Helpers/nav");
var TaskStats = require("./Helpers/taskStats");
var Icon = require('react-native-vector-icons/Ionicons');
var profileImg = require('image!profile');
var Todos = require('./Helpers/todoInverse');

var toDos = [{
        time: {
            value: "1:30",
            surfix: 'PM'
        },
        title: {
            main: "New Icons",
            sub: 'Mobile App'
        },
},{
        time: {
            value: "2:30",
            surfix: 'PM'
        },
        title: {
            main: "Design Stand Up",
            sub: 'Hangouts'
        },
},{
        time: {
            value: "3:30",
            surfix: 'PM'
        },
        title: {
            main: "Finish Home Screen",
            sub: 'Web App'
        }},{
        time: {
            value: "1:30",
            surfix: 'PM'
        },
        title: {
            main: "New Icons",
            sub: 'Mobile App'
        },
},
];

class Profile extends Component {
    constructor() {
        super();
        
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
         this.state = {
            dataSource: this.ds.cloneWithRows(toDos)
         }
        
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
        <ListView
        dataSource={this.state.dataSource}
       automaticallyAdjustContentInsets={false}
        renderRow={Todos}
      renderRow={(rowData) => 
                 <Todos 
todoProps={rowData}/>} />
        
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