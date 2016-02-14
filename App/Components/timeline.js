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

render(){
return(
  <View style ={styles.container}>
<Nav title ={{val:'Timeline'}} />
  </View>
);

}
  }
const styles = StyleSheet.create({
container:{
flex:1
}

});
  module.exports = Timeline;
