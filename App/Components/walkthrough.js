
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
import Swiper from 'react-native-swiper'

class Walk extends Component {
    constructor() {
        super();
    }
  render() {
    return (
       <View style={styles.container}>
  
    <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Image source={require('image!walk1')} resizeMode={'contain'} style={styles.walk} />
        </View>
        <View style={styles.slide1}>
         <Image source={require('image!walk2')} resizeMode={'contain'} style={styles.walk} />
        </View>
        <View style={styles.slide1}>
          <Image source={require('image!walk3')} resizeMode={'contain'} style={styles.walk} />
        </View>
      </Swiper>
                </View>
                    
    );
  }
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
