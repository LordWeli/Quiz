import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function(props) {
  const [buttonMark, setButtonMark] = useState(false);

  const icon_name = props.correct ? 'check' : 'times';

  const changeHeightButton = () => {
    return buttonMark ? props.heightButtonValues[0] : props.heightButtonValues[1];
  }

  const changeBackground = () => {
    return buttonMark ? props.setButtonMarkBackground[0] : props.setButtonBackground[0];
  }

  const animatedButton = () => {
    setButtonMark(true);
    changeHeightButton();

    props.changeCorrectValue(props.correct);

    props.setColor[1]('#fafafa');

    props.setButtonMarkBackground[1]('#F4978E');
    props.setButtonBackground[1]('#FBC4AB');

    props.changeHeightValue();
    
    setTimeout(() => {
      props.clearButtonMark(setButtonMark);
    }, 2197);
  }

  const styleButton = {
    button: {
      width: 328,
      height: changeHeightButton(),
      backgroundColor: changeBackground(),
      borderRadius: 18,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 19,
    },
    icon: {
      width: '5%',
      color: props.setColor[0],
      textAlign: 'center',
      marginLeft: -60
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.6} disabled={props.buttonDisable} onPress={()=> { animatedButton() }}>
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
    width: '100%',
    textAlign: 'center',
    paddingRight: 60,
    paddingLeft: 60

  },
});
