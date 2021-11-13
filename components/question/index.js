import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, Animated } from 'react-native';
import Header from './Header';
import Question from './Question';
import Button from './Button';
import Score from '../shared/Score'

export default function({ navigation }) {
  const params = { color: '#eca39a', height: 70 }

  const [color, setColor] = useState(params['color']);
  const [buttonMarkBackground, setButtonMarkBackground] = useState(params['color']);
  const [buttonBackground, setButtonBackground] = useState(params['color']);
  const [heightMarkButton, setHeightMarkButton] = useState(new Animated.Value(params['height']));
  const [heightButton, setHeightButton] = useState(new Animated.Value(params['height']));
  const [buttonDisable, setButtonDisable] = useState(false);

  const quantity = '50%';
  const values_to_button = [
    {question: '19 Anos', correct: true},
    {question: '37 Anos', correct: false},
    {question: '20 Anos', correct: false},
    {question: '17 Anos', correct: false}
  ]

  useEffect(() => {
    clearStates();
  }, []);

  const clearStates = () => {
    setColor(params['color']);
    setButtonMarkBackground(params['color']);
    setButtonBackground(params['color']);
    setHeightMarkButton(new Animated.Value(params['height']));
    setHeightButton(new Animated.Value(params['height']));
    setButtonDisable(false);
  }

  const clearButtonMark = (function_state) => {
    function_state(false);
  }

  const changeHeightValue = () => {
    Animated.parallel([
      Animated.timing(
        heightMarkButton,
        {
          toValue: 80,
          duration: 300,
          useNativeDriver: false,
        }),
      Animated.timing(
        heightButton,
        {
          toValue: 60,
          duration: 300,
          useNativeDriver: false,
        })
    ]).start();

    setButtonDisable(true);

    setTimeout(() => {
      if(Score['current'] == Score['total']) {
        navigation.navigate('Final');
      }
      else {
        clearStates();
        navigation.navigate('Questions');
      }
    }, 3500);
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header quantity={quantity} navigation={navigation}/>
      <Question/>
      { 
        values_to_button.map((value, value_index) => {
          return (
            <Button
              text={value.question}
              key={value_index}
              navigation={navigation}
              correct={value.correct}
              setColor={[color, setColor]}
              setButtonMarkBackground={[buttonMarkBackground, setButtonMarkBackground]}
              setButtonBackground={[buttonBackground, setButtonBackground]}
              heightButtonValues={[heightMarkButton, heightButton]}
              changeHeightValue={changeHeightValue}
              clearButtonMark={clearButtonMark}
              buttonDisable={buttonDisable}
            />
          )
        })
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FBF5EE',
    fontFamily: 'Roboto',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
  },
});
