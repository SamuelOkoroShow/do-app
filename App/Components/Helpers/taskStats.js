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

var Icon = require('react-native-vector-icons/Ionicons');

class Tasks extends Component {
    constructor() {
        super();
        
    }
    
render(){
return(
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
);
}




}
 

const styles = StyleSheet.create({
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
    }, menu: {
        width: 15,
        alignSelf: 'center',
        margin: 15
    },
    taskText: {
        color: '#fff',
        fontSize: 10,
        fontWeight:'500'
    },
    taskBig: {
        color: '#fff',
        fontSize: 32,
        margin:10,
        fontWeight:'300'
    },
    taskBox: {
        alignItems: 'center',
        flex: 1,
        margin:35,
    }
    
});




module.exports = Tasks;