
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Image,
    Text,
    TextInput,
        ListView,
    TouchableWithoutFeedback,
    View
}
from 'react-native';
import Swiper from 'react-native-swiper'
var Icon = require('react-native-vector-icons/Ionicons');
var TodoTab = require('./todo');
var API = require('./../Utils/todoAPI');


// This Data would normally be supplied by the API



class Month extends Component {
    constructor(props) {
        super(props);
        this.toDos = [{
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
        },
}];
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: this.ds.cloneWithRows([{
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
        },
}])
        }
    }
  


  render() {
     
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
        
    

    <ListView
        dataSource={this.state.dataSource}
        renderRow={TodoTab}
      renderRow={(rowData) => <TodoTab 
todoProps={rowData}
    
    />}
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
