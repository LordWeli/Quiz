import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function(props) {
  const [height, setHeight] = useState(new Animated.Value(70));


  const icon_name = props.correct ? 'check' : 'times'

  const animatedButton = () => {
    props.setColor('#fafafa');

    Animated.timing(
      height,
      {
        toValue: 80,
        duration: 300,
        useNativeDriver: false,
      }).start();

    // setTimeout(() => {
    //   props.navigation.navigate('Final')
    // }, 5000);
  }

  const styleButton = {
    button: {
      width: 328,
      height: 70,
      backgroundColor: '#ECA39A',
      borderRadius: 18,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 19,
    },
    icon: {
      width: '35%',
      color: props.color,
      textAlign: 'center'
    }
  }

  return (
    <TouchableOpacity onPress={()=> { animatedButton() }}>
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
