import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, Platform, StatusBar } from 'react-native';
import Header from './Header';
import * as ScoreChange from '../shared/ScoreChange';

export default function({ navigation }) {
  const remakeQuestions = () => {
    // global.clear_correct_values;

    setTimeout(() => {
      navigation.navigate('Questions')
    }, 100)
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header/>

      {/* <View style={styles.scores}>
        <Score fontSize={60} component={'final'}/>
      </View> */}

      <TouchableOpacity style={styles.results} onPress={()=> {navigation.navigate('Results')}}>
        <Text style={styles.text}>
          Ver Resultados
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.remakeButton} onPress={()=> { remakeQuestions() }}>
        <Text style={styles.text}>
          Refazer
        </Text>
      </TouchableOpacity>
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
  scores: {
    marginBottom: 25
  },
  results: {
    width: 260,
    height: 90,
    backgroundColor: '#ECA39A',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FAFAFA',
    fontSize: 22,
  },
  remakeButton: {
    width: '100%',
    height: 85,
    backgroundColor: '#ECA39A',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0
  },
});
