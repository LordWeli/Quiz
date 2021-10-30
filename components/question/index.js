import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Header from './Header';
import Question from './Question';
import Button from './Button';

export default function({ navigation }) {
  const [color, setColor] = useState('#eca39a');
  const [buttonMarkBackground, setButtonMarkBackground] = useState('#eca39a');
  const [buttonBackground, setButtonBackground] = useState('#eca39a');

  const quantity = '50%';
  const values_to_button = [
    {question: '19 Anos', correct: true},
    {question: '37 Anos', correct: false},
    {question: '20 Anos', correct: false},
    {question: '17 Anos', correct: false}
  ]

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
