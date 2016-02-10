
'use strict';
import React, {
    Component,
    StyleSheet,
    Image,
    ListView,
    Text,
    TouchableWithoutFeedback,
    View
}
from 'react-native';

var Nav = require("./Helpers/nav");

var groupData = [
    {
        title: 'Food',
        sub: 'NEED TO BUY',
        image: 'http://unappers.com/bread.jpg'
    }, {
        title: 'Work',
        sub: 'FREELANCE PROJECTS',
        image: 'http://unappers.com/chair.jpg'
    }, {
        title: 'Vacation',
        sub: 'FAVORITE PLACES',
        image: 'http://unappers.com/cali.jpg'
    }, {
        title: 'Cities',
        sub: 'WANT TO VISIT',
        image: 'http://unappers.com/work.jpg'
    }
];
class Overview extends Component {
    constructor() {
        super();
         this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
        dataSource: this.ds.cloneWithRows(groupData)
        }
    }
        
    rowView(x){
    return(
        
    <View style={{height:80, flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#d3d3d3'}}>
        <Image style={{flex:1, width:null, height:null}} 
        source={{uri: x.image}}
        />
       <View style={{flex:3, backgroundColor:'#f4f4f4', justifyContent:'center', padding:25}}>
        <Text style={{fontSize:20, textAlign:'left',}}>{x.title}</Text>
        <Text style={{color:'#888', fontSize:10}}>{x.sub}</Text>
        </View>
       
        </View>
    );
    }
    
    render(){
    return(
    <View style={styles.container}>
        <Nav />
        <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
      renderRow={(rowData) => this.rowView(rowData)}
    />
        </View>
    );
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
});
module.exports = Overview;
    