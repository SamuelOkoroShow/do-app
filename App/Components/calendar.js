
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
    View,
    ScrollView
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
           <ScrollView 
          automaticallyAdjustContentInsets={false}
          style={styles.rowScroll}>
               <View style={styles.rowz}>
                   <View style={{flexDirection:'row'}}><Text style={{fontSize:18, color:'#454449', margin:25, marginRight:3, alignSelf:'center'}}>8:30</Text>
                       <Text style={{fontWeight:'100', color:'#454449', fontSize:11, alignSelf:'center',marginTop:5}}>AM</Text></View>
                   <View>
                           <Text style={{fontSize:16, color:'#454449', margin:25, marginTop:28,marginBottom:3, alignSelf:'center'}}>New Icons</Text>
                           <Text style={{fontSize:16,color:'#A7A7A7', margin:25, marginTop:0, alignSelf:'center'}}>Mobile App</Text>
                           </View>
                   <View style={{flexDirection:'row',}}><Image source={require('image!green')} resizeMode={'contain'} style={{width:10, alignSelf:'center', margin:25,}}/>
                               </View>
                   </View>
               <View style={styles.rowz}>
                   <View style={{flexDirection:'row'}}><Text style={{fontSize:18, color:'#454449', margin:25, marginRight:3, alignSelf:'center'}}>11:00</Text>
                       <Text style={{fontWeight:'100', color:'#454449', fontSize:11, alignSelf:'center',marginTop:5}}>AM</Text></View>
                   <View>
                           <Text style={{fontSize:16, color:'#454449', margin:25, marginTop:28,marginBottom:3, alignSelf:'center'}}>New Icons</Text>
                           <Text style={{fontSize:16,color:'#A7A7A7', margin:25, marginTop:0, alignSelf:'center'}}>Mobile App</Text>
                           </View>
                   <View style={{flexDirection:'row',}}><Image source={require('image!purple')} resizeMode={'contain'} style={{width:10, alignSelf:'center', margin:25,}}/>
                               </View>
                   </View>
               <View style={styles.rowz}>
                   <View style={{flexDirection:'row'}}><Text style={{fontSize:18, color:'#454449', margin:25, marginRight:3, alignSelf:'center'}}>2:30</Text>
                       <Text style={{fontWeight:'100', color:'#454449', fontSize:11, alignSelf:'center',marginTop:5}}>PM</Text></View>
                   <View>
                           <Text style={{fontSize:16, color:'#454449', margin:25, marginTop:28,marginBottom:3, alignSelf:'center'}}>New Icons</Text>
                           <Text style={{fontSize:16,color:'#A7A7A7', margin:25, marginTop:0, alignSelf:'center'}}>Mobile App</Text>
                           </View>
                   <View style={{flexDirection:'row',}}><Image source={require('image!green')} resizeMode={'contain'} style={{width:10, alignSelf:'center', margin:25,}}/>
                               </View>
                   </View>
                </ScrollView>
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
    rowz:{
     flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        justifyContent: 'space-between',
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
        
    },rowScroll:{
    flex:1,
    
        
    },
    row2:{
    flex:6,
        marginTop:-20,
        marginBottom:-80,
        
     
    },
    row3:{
    flex:5,
        
    },
    }
);
module.exports = Walk;
