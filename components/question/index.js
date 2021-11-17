import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, Animated } from 'react-native';
import Header from './Header';
import Question from './Question';
import Button from './Button';
import * as ProgressValue from '../shared/ProgressValue';
import * as ScoreChange from '../shared/ScoreChange';

export default function({ navigation }) {
  const params = { color: '#eca39a', height: 70 }
  const score = ScoreChange.changeScoreValues();

  const [color, setColor] = useState(params['color']);
  const [buttonMarkBackground, setButtonMarkBackground] = useState(params['color']);
  const [buttonBackground, setButtonBackground] = useState(params['color']);
  const [heightMarkButton, setHeightMarkButton] = useState(new Animated.Value(params['height']));
  const [heightButton, setHeightButton] = useState(new Animated.Value(params['height']));
  const [buttonDisable, setButtonDisable] = useState(false);

  const quantity = ProgressValue.getPercent(score['current']);

  const values_to_question = global.questionAnswers[score['current'] - 1];
  const values_to_answers = values_to_question["answers"];

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
      if(score['current'] == (score['total'] - 1)) {
        navigation.navigate('Final');
      }
      else {
        ScoreChange.changeScoreValues(true);
        clearStates();
        navigation.navigate('Questions');
      }
    }, 2600);
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header quantity={quantity} navigation={navigation} ScoreChange={ScoreChange}/>
      <Question question={values_to_question['question']}/>

      {
        values_to_answers.map((value, value_index) => {
          return (
            <Button
              text={value.answer}
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
