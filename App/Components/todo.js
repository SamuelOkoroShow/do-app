import React, {
    
    Component,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

class TodoList  extends Component {
    constructor() {
        super();
        console.log('whors');
    }
    
    render(){
        return(
          <View style={styles.rowz}>
                   <View style={{flexDirection:'row'}}><Text style={{fontSize:18, color:'#454449', margin:25, marginRight:3, alignSelf:'center'}}>{this.props.time.value}</Text>
                       <Text style={{fontWeight:'100', color:'#454449', fontSize:11, alignSelf:'center',marginTop:5}}>{this.props.time.surfix}</Text></View>
                   <View>
                           <Text style={{fontSize:16, color:'#454449', margin:25,marginBottom:3, alignSelf:'flex-start'}}>{this.props.title.main}</Text>
                           <Text style={{fontSize:16,color:'#A7A7A7', margin:25, marginTop:0, alignSelf:'center'}}>{this.props.title.sub}</Text>
                           </View>
                   <View style={{flexDirection:'row',}}><Image source={require('image!green')} resizeMode={'contain'} style={{width:10, alignSelf:'center', margin:25,}}/>
                               </View>
                   </View>
    );}
};
    
    TodoList.propTypes = {
        time: React.PropTypes.object.isRequired,
        title: React.PropTypes.object.isRequired,
        
    };

const styles = StyleSheet.create({
 rowz:{
     height:80,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        justifyContent: 'space-between',
    },
});

module.exports = TodoList;