/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import myStyles from '../Styles/MyStyles';

const PrimaryButton = (props) => {
  return(
    <TouchableOpacity
      style={props.style}
      activeOpacity = {1}
      onPress={props.onClick}>
        <Text
        style={{textAlign: 'center', fontWeight: 'bold', color:'white'}}>
          {props.label}
        </Text>
    </TouchableOpacity>
    );
  }

export default PrimaryButton;
