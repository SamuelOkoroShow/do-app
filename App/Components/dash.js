
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
       <Image source={require('image!dashback')} style={styles.container}>
  <View style={styles.row1}>
       <Image source={require('image!menu')} resizeMode={'contain'} style={styles.menu}/>
       <View style={{flexDirection:'row'}}>
           <Text style={styles.temp}>64°</Text>
           <Image source={require('image!profile')} resizeMode={'contain'} style={styles.prof}/></View>
      </View>
  <View style={styles.row2}>
      <View>
      <Text style={{flex:3,backgroundColor: 'rgba(0, 0, 0, 0)' ,alignSelf:'center', fontSize:30, fontWeight:'200',paddingTop:50}}>Good Morning!</Text>
      <View style={{flex:5}}>
         
          <Image source={require('image!cal')} style={styles.cal} resizeMode={'contain'}>
               <View style={{justifyContent:'center',
        alignItems:'center',flex:1,alignSelf:'center'}}>
              <Text style={styles.midTxt}>16</Text>
              <Text style={styles.midTxtS}>TUE</Text>
              </View>
              </Image>
          </View>
      </View>
        </View>
  <View style={styles.row3}>
      <Text style={{flex:3,backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent:'center', fontSize:14, fontWeight:'200'}}>Feburary 2016</Text>
      <Image source={require('image!down')} style={{width:15,marginBottom:10}} resizeMode={'contain'}/>
      </View>
   
                </Image>
                    
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    cal: {
        width: 160,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },
    temp: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 25

    }, midTxt: {
        flex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        color: '#fff',
        fontSize: 65,
        fontWeight: '300'
    },midTxtS: {
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
    row2: {
        flex: 8
    },
    row3: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'flex-start',
    },

    close: {
        width: 20,
        alignSelf: 'center',
        margin: 20
    },

});
module.exports = Walk;
