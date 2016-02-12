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
       
    }
    
    render(){
        return(
          <View style={styles.rowz}>
             <View style={{flexDirection:'row', flex:1}}><Image source={require('image!green')} resizeMode={'contain'} style={{width:10, alignSelf:'center', margin:25,}}/>
                               </View>
                  
                   <View style={{flex:3}}>
                           <Text style={{fontSize:16, color:'#454449', margin:25,marginBottom:3, alignSelf:'flex-start'}}>{this.props.todoProps.title.main}</Text>
                           <Text style={{fontSize:13,color:'#A7A7A7', margin:25, marginTop:0, alignSelf:'flex-start'}}>{this.props.todoProps.title.sub}</Text>
                           </View>
                            <View style={{flexDirection:'row', flex:1,}}><Text style={{fontSize:18, color:'#454449', margin:0, marginRight:3, alignSelf:'center'}}>{this.props.todoProps.time.value}</Text>
                       <Text style={{fontWeight:'100', color:'#454449', fontSize:11, alignSelf:'center',marginTop:5}}>{this.props.todoProps.time.surfix}</Text></View>
                  
                   </View>
    );}
};
    
    TodoList.propTypes = {
        todoProps: React.PropTypes.object.isRequired,
        
        
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