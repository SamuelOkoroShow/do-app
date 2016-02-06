
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
    }
  render() {
    
return (
     <Calendar
          ref="calendar"
          eventDates={['2015-07-03', '2015-07-05', '2015-07-10', '2015-07-15', '2015-07-20', '2015-07-25', '2015-07-28', '2015-07-30']}
          showControls={true}
            style={{backgroundColor:'#6664A5'}}
          dayHeadings={customDayHeadings}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({selectedDate: date})}
          onTouchPrev={() => console.log('Back TOUCH')}
          onTouchNext={() => console.log('Forward TOUCH')}
          
          customStyle={{day: {fontSize: 12, textAlign: 'center', color:'#fff',  }, dayCircleFiller:{  padding:0, margin:0}, weekRow:{backgroundColor:'#6664A5',flex:1, padding:0 }, selectedDayCircle:{backgroundColor:'#52CFC7', padding:0},calendarHeading:{backgroundColor:'#6664A5',borderBottomWidth:1,borderBottomColor:'#6D6BAC' padding:7, }, currentDayCircle:{ backgroundColor:'#52CFC7'}, 
              currentDayText:{padding:0,color:'#fff', fontSize:15, fontWeight:'600'},eventIndicatorFiller:{backgroundColor:'#fff', height:0}, dayButton:{borderBottomWidth:0, borderTopWidth:1,borderTopColor:'#6D6BAC', padding:0}, dayHeading:{color:'#fff', fontSize:13}}}  
          />
    );
 

};
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
 
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
  }
    }
);
module.exports = Walk;
