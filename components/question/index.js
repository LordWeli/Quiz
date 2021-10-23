import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, Animated } from 'react-native';
import Question from './Question';
import Button from './Button';
import Header from './Header';

export default function({ navigation }) {
  const quantity = '50%'
  const values_to_button = [
    {question: '19 Anos', correct: true},
    {question: '37 Anos', correct: false},
    {question: '20 Anos', correct: false},
    {question: '17 Anos', correct: false}
  ]

  const [height, setHeight] = useState(new Animated.Value(70));

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header quantity={quantity} navigation={navigation}/>
      <Question/>
      { 
        values_to_button.map((value, value_index) => {
          return (
            <Button text={value.question} correct={value.correct} key={value_index} height={height} navigation={navigation}/>
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
