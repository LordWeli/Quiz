import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Image, Platform, StatusBar } from 'react-native';
import Header from './Header';
import * as QuestionAnswers from '../shared/QuestionAnswers';

export default function({ navigation }) {
  const getQuestionAnswerToQuestions = () => {
    global.questionAnswers = QuestionAnswers.returnShuffle();

    setTimeout(() => {
      navigation.navigate('Questions');
    }, 100)
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Header/>

        <Image style={styles.homeLogo} source={require('../../assets/homeLogo.png')} />        
      </View>

      <View style={styles.initContainer}>
        <TouchableOpacity style={styles.buttonInit} onPress={()=> { getQuestionAnswerToQuestions() }}>
          <Text style={styles.textToButtonInit}>
            Iniciar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FBF5EE',
    fontFamily: Platform.OS === "android" ? 'Roboto' : 'Arial',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  homeLogo: {
    width: 328,
    height: 195,
    marginBottom: 80,
  },
  initContainer: {
    height: '25%',
    justifyContent: 'center',
  },
  buttonInit: {
    width: 328,
    height: 114,
    backgroundColor: '#ECA39A',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textToButtonInit: {
    fontSize: 22,
    color: '#FAFAFA',
  },
});
