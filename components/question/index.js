import React from 'react';
import { StyleSheet, SafeAreaView, View, Platform, StatusBar  } from 'react-native';
import Question from './Question';
import Button from './Button';
import Header from './Header';

export default function({ navigation }) {
  const quantity = '50%'
  const text_to_button = [
    '19 Anos',
    '37 Anos',
    '20 Anos',
    '17 Anos'
  ]

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header quantity={quantity}/>
      <Question/>
      { 
        text_to_button.map((text, text_index) => {
          return (
            <Button text={text} key={text_index}/>
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
