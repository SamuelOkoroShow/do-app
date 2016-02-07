/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var Login =  require("./App/Components/overview");

'use strict';
import React, {
    AppRegistry,
    Component,
    NavigatorIOS,
    StyleSheet,
    Image,
    Text,
    View
}
from 'react-native';

class do_2 extends Component {
  render() {
    return (
        <NavigatorIOS
         style={styles.container}
          navigationBarHidden={true}
         initialRoute={{
         component: Login,
        title: '',
      
      }}
    />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
      
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('do_2', () => do_2);
