
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

class Month extends Component {
    constructor() {
        super();
        console.log('whors');
    }
  render() {
    return (
       <Image source={require('image!dashback')} style=
  <View style={styles.row1}>
  
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
module.exports = Month;
