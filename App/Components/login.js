
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

class Login extends Component {
    constructor() {
        super();
    
    }
  render() {
    return (
       <Image source={require('image!background')}  style={styles.container}>
        <View style={styles.topBit}>
            <View style={styles.imgholder}>
                <Image source={require('image!mark')} resizeMode={'contain'} style={styles.mark}/></View>
                    <View style={styles.row2}>
                        <Text style={styles.whiteH}>Get Started!</Text>
                </View>
            </View>
        <View style={styles.bottomBit}>
            <View style={styles.rowT}>
                <Text style={styles.row,{color:'#fff',fontWeight:'200',fontStyle:'italic'}}>Username</Text>
                <TextInput
    style={{flex:1, color:'#fff', fontSize:14, }}
    placeholderTextColor='#fff'
    placeholder="Email Address"
  />
                </View>
        <View style={styles.row}>
            <Text style={styles.row,{color:'#fff',fontWeight:'200',fontStyle:'italic'}}>Password</Text>
                <TextInput
    style={{flex:1, color:'#fff', fontSize:14, fontStyle:'italic'}}
    secureTextEntry = {true}
     placeholderTextColor='#fff'
    placeholder="Password Here"
  />
        </View>
        <View style={styles.rowtouch}><TouchableWithoutFeedback ><Text style={{color:'#fff'}}>Sign In</Text></TouchableWithoutFeedback></View>
        <View style={styles.rowtouchz}><TouchableWithoutFeedback ><Text style={{color:'#fff'}}>Dont Have An Account? Sign Up</Text></TouchableWithoutFeedback></View>
            </View>

      </Image>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: null,
        height: null,
    },
    topBit: {
        flex: 5,
    },
        whiteH:{
        color:'#fff',
        fontSize:24,
        backgroundColor:'rgba(250, 250, 250, 0)',
        fontWeight: '300'
    },
    imgholder: {
        flex: 4,
        justifyContent: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft:25,
        paddingTop:15,
        
    },rowtouch: {
        flex: 1,
        flexDirection: 'column',
      
        backgroundColor:'#6563A4', 
        justifyContent:'center',
        alignItems:'center'
        
    },rowtouchz: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
        
    },
    rowT: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft:25,
        paddingTop:15,
        borderBottomColor:'rgba(250, 250, 250, 0.35)',
        borderBottomWidth:1,
        
    }, row2: {
        flex: 2,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        
    },
    bottomBit: {
        flex: 4,
        backgroundColor: 'rgba(250, 250, 250, 0.33)'
    },
    mark: {
        flex: 1,
        margin: 40,
        width: null,
        height: null,
    }

});
module.exports = Login;
