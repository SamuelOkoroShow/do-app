
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Image,
    ListView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
}
from 'react-native';

var groupData = [
    {
        title: 'Food',
        sub: 'NEED TO BUY',
        image: 'http://unappers.com/bread.jpg'
    }, {
        title: 'Work',
        sub: 'FREELANCE PROJECTS',
        image: 'http://unappers.com/chair.jpg'
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
        
    
    render(){
    return(
    <View style={styles.container}>
        
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
    