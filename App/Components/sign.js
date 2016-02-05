
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

class Sign extends Component {
    constructor() {
        super();
        console.log('whors');
    }
  render() {
    return (
       <View style={styles.container}>
        <View style={styles.rowz}>
        <Image style={styles.close} 
        source={require('image!close')} 
        resizeMode={'contain'}/>
            <Text style={styles.sign}>Sign Up</Text>
                </View>
               <Image style={styles.header} 
        source={require('image!header')} 
        resizeMode={'cover'}>
        <Image source={require('image!avatar')} resizeMode={'contain'} style={styles.avatar} />
        </Image>
        <View style={styles.rowT}>
                <Text style={styles.row,{color:'#333',fontWeight:'200',fontStyle:'italic'}}>Name</Text>
                <TextInput
    style={{flex:1, color:'#333', fontSize:14, }}
   
    placeholder="Enter Your Name "
  />
                </View>
    <View style={styles.rowT}>
                <Text style={styles.row,{color:'#333',fontWeight:'200',fontStyle:'italic'}}>Email</Text>
                <TextInput
    style={{flex:1, color:'#333', fontSize:14, }}
  
    placeholder="Email Address"
  />
                </View>
    <View style={styles.rowT}>
                <Text style={styles.row,{color:'#333',fontWeight:'200',fontStyle:'italic'}}>Password</Text>
                <TextInput
    style={{flex:1, color:'#333', fontSize:14, }}
 secureTextEntry = {true}
    placeholder="Password Here"
  />
                </View>
    <View style={styles.rowT}>
                <Text style={styles.row,{color:'#333',fontWeight:'200',fontStyle:'italic'}}>Birthday</Text>
                <TextInput
    style={{flex:1, color:'#333', fontSize:14, }}

    placeholder="Birthday Here"
  />
                </View>
    <View style={styles.row}>
                
                </View>
    <View style={styles.rowtouch}>
                <Image source={require('image!done')} resizeMode={'contain'} style={styles.done} />
                </View>
    
                </View>
                    
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

       
    },
    header: {
        flex: 3,
        width: null,
        height: null,
        margin:0,
        alignItems:'center',
        justifyContent:'center'
    },rowtouch: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6563A4', 
        justifyContent:'center',
        alignItems:'center'
        
    },
    close: {
        width: 20,
        alignSelf: 'center',
        margin: 20
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        margin:10,
        
     

    }, rowz: {
        flex: 1,
        marginTop:15,
        flexDirection: 'row',
        margin:0,
    },
     rowT: {
        flex: 1,
        flexDirection: 'column',
        padding:15,
        paddingBottom:4,
        borderBottomColor:'rgba(0, 0, 0, 0.15)',
        borderBottomWidth:1,
        
    },
    avatar:{
    width:100,
    },
    done:{
    width:30,
    },

    sign: {
        alignSelf: 'center',
        margin: 20,
        fontWeight:'200',
        fontSize:18
        

    }
});
module.exports = Sign;
