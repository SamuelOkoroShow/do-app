'use strict';
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    ListView,
    View
}
from 'react-native';

var profileImg = require('image!profile');
var Nav = require('./Helpers/nav')

class Timeline extends Component {
    constructor() {
        super();

        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
         this.state = {
            dataSource: this.ds.cloneWithRows({hi:"toDos"})
         }

    }
badge(){
  return(<View style={styles.badge}>
      <Image source = {profileImg} style={{height:75, margin:10}} resizeMode='contain' />
      <Text style={{color:'#fff',margin:5, backgroundColor:'rgba(0,0,0,0)', fontSize:26, fontWeight:'300'}}>February</Text>
      <Text style={{color:'#fff', margin:5,backgroundColor:'rgba(0,0,0,0)', fontSize:12}}>69 EVENTS</Text>
      </View>);
}

render(){
return(
  <View style={{flex:1}}>
  <Nav title ={{val:'Timeline'}} />
  <Image
    source={require('image!header')}
    resizeMode={'cover'}
    style ={{flex:2, width:null, height:null}}>
{this.badge()}
</Image>
<View style={{flex:4}}></View>
</View>
);

}
  }
const styles = StyleSheet.create({
container:{
flex:1,
width:null,
height:null
},
badge:{
  height:180,
      alignItems:'center',
      justifyContent:'center'
  }

});
  module.exports = Timeline;
