
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Image,
    TabBarIOS,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
}
from 'react-native';
var Calendar = require('react-native-calendar');
var Icon = require('react-native-vector-icons/Ionicons');
var customDayHeadings = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    


class Walk extends Component {
    constructor() {
        super();
        this.state ={
         date: "February"
        };
    }
  render() {
    
return (
     <View style={styles.container}>
    <View style={styles.row1}>
    <Image source={require('image!menu')} resizeMode={'contain'} style={styles.menu}/>
<Text style={{margin:15, fontSize:15,marginRight:0}}>{this.state.date}</Text>
<Image source={require('image!down')} resizeMode={'contain'} style={{margin:15, width:10}}/>
    </View>
 <View style={styles.row2}>
    <Calendar
          ref="calendar"
         
          showControls={false}
          dayHeadings={customDayHeadings}
          titleFormat={'MMMM YYYY'}
         
          onDateSelect={(date) => this.setState({selectedDate: date})}
          onTouchPrev={() => console.log('Back TOUCH')}
          onTouchNext={() => console.log('Forward TOUCH')}
          
          customStyle={{day: {fontSize: 12, textAlign: 'center', color:'#fff',  }, 
              dayCircleFiller:{ borderRadius:0, padding:0, height:45, width:45}, weekRow:{backgroundColor:'#6664A5',flex:1, padding:0 }, selectedDayCircle:{backgroundColor:'#52CFC7', padding:0},
                  calendarHeading:{backgroundColor:'#6664A5', borderBottomWidth:1,borderTopWidth:0, borderBottomColor:'#6D6BAC', padding:7, }, 
                      currentDayCircle:{ backgroundColor:'#52CFC7'}, 
              currentDayText:{padding:0,color:'#fff', fontSize:15, fontWeight:'600'},eventIndicatorFiller:{backgroundColor:'#fff', height:0}, dayButton:{borderBottomWidth:0, borderTopWidth:1,borderTopColor:'#6D6BAC', padding:0, margin:0}, dayHeading:{color:'#fff', fontSize:13},title:{height:0},calendarContainer:{backgroundColor:'#fff'}}}  
          />
              </View>
           <View style={styles.row3}>
               <View style={styles.row1}></View>
               <View style={styles.row1}></View>
               <View style={styles.row1}></View>
               </View>
              
              </View>
    );
 

};
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
 
    },
    walk:{
    width:300
    },
    
   
    close: {
        width: 20,
        alignSelf: 'center',
        margin: 20
    },
     wrapper: {
  },
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
    tabs:{
    backgroundColor:'#333'
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
  }, menu: {
        width: 21,
        
        margin:10,
      marginBottom:0

    },
    row1:{
    flex:1,
        flexDirection:'row'
        
    },
    row2:{
    flex:6,
        marginTop:-20,
     
    },
    row3:{
    flex:5
    },
    }
);
module.exports = Walk;
