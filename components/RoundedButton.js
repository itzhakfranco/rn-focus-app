import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native/';

const RoundedButton = ({style = {}, textStyle = {}, size = 125, title}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = size =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderWidth: 2,
    },
    text: {color: '#fff', fontSize: size / 3},
  });
export default RoundedButton;
