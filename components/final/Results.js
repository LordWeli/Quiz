import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, Platform, StatusBar } from 'react-native';
import QuestionResult from './QuestionResult';

export default function({ navigation }) {
  const results = [
    '1 - Primeira pergunta',
    '2 - Segunda pergunta',
    '3 - Terceira pergunta',
    '4 - Quarta pergunta',
    '5 - Quinta pergunta',
    '6 - Sexta pergunta',
  ]
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.questionsTitle}> Revisão de Questões </Text>
      <ScrollView>
        { 
          results.map((question, question_index) => {
            return (
              <QuestionResult question={question} answer={''} key={question_index}/>
            )
          })
        }
      </ScrollView>

      <TouchableOpacity style={styles.resultButton} onPress={()=> { navigation.navigate('Final') }}>
        <Text style={styles.text}>
          Resultado
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
  text: {
    color: '#FAFAFA',
    fontSize: 22,
  },
  resultButton: {
    width: '100%',
    height: 85,
    backgroundColor: '#F18C8C',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  questionsTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 24,
    color: '#F08080',
  },
});
