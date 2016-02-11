
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

class Profile extends Component {
    constructor() {
        super();
    }
    
    render(){
    return(
        <View style={styles.container}>
        <Nav title ={{val:"Profile"}} />
        <TaskStats />
        
        </View>
    );
    }
}
        
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        }

    });

module.exports = Profile;