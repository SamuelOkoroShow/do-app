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

class Nav extends Component {
    constructor() {
        super();
        
    }
    
render(){
return(
<View style={styles.container}>
      
  <View style={styles.title}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('image!menu')} resizeMode={'contain'} style={styles.menu}/>
        <Text style={styles.titleTxt}>{this.props.title}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Icon name="ios-plus-empty" size={27} color="#999" style={{margin:10, alignSelf:'center'}} /> 
           <Icon name="ios-search" size={23} color="#999" style={{margin:10, alignSelf:'center'}} /> 
        </View>
        </View>
           </View>
);
}}
   Nav.propTypes = {
        title: React.PropTypes.object.isRequired,
        
        
    };

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
    
});




module.exports = Nav;