'use strict';
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
}
from 'react-native';

var Nav = require("./Helpers/nav");

class Create extends Component {
    constructor() {
        super();
       
    }
    render(){
    return(
    <Nav title={"Create New"}/>
    );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
  

});

module.exports = Create;