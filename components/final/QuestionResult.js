import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}> { `${props.result_key + 1} - ${props.question}` } </Text>
      <View style={styles.result}>
        { 
          props.answers.map((answer, answer_index) => {
            const icon_name = answer['correct'] ? 'check' : 'times';

            const styleButton = {
              textContainer: {
                width: 320,
                flexDirection: 'row'
              },
              icon: {
                color: '#fafafa',
                alignSelf: 'center',
                width: 16,
              },
              textToResult: {
                color: '#fafafa',
                fontSize: 16,
                margin: 10,
                textAlign: 'justify',
                paddingRight: 15
              },
            }

            return (
              <View key={answer_index} style={styleButton.textContainer}>
                <Icon name={icon_name} size={15} style={styleButton.icon} />
                <Text style={styleButton.textToResult}>
                  {answer['answer']}
                </Text>
              </View>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  questionTitle: {
    fontSize: 22,
    color: '#F08080',
    marginBottom: 5
  },
  result: {
    width: 340,
    minHeight: 130,
    borderRadius: 15,
    backgroundColor: '#F8AD9D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
