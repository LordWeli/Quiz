import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function(props) {
  const icon_name = props.correct ? 'check' : 'times';
  const backgroundButton = props.correct ? props.setButtonMarkBackground[0] : props.setButtonBackground[0];
  const buttonHeight = props.correct ? props.heightButtonValues[0] : props.heightButtonValues[1];

  const animatedButton = () => {
    props.setColor[1]('#fafafa');
    props.setButtonMarkBackground[1]('#F4978E');
    props.setButtonBackground[1]('#FBC4AB');
    props.changeHeightValue();
  }

  const styleButton = {
    button: {
      width: 328,
      height: buttonHeight,
      backgroundColor: backgroundButton,
      borderRadius: 18,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 19,
    },
    icon: {
      width: '35%',
      color: props.setColor[0],
      textAlign: 'center'
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={()=> { animatedButton() }}>
      <Animated.View style={styleButton.button}>
        <Text style={styles.textButton}> { props.text } </Text>
        <Icon name={icon_name} size={15} style={styleButton.icon} />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 22,
    color: '#FAFAFA',
    width: '65%',
    textAlign: 'right'
  },
});
