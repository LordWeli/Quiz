import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function(props) {
  const values_to_mark = props.QuestionMarkToResult.getValueToMark();

  let answer_mark_value = values_to_mark.find(function(values) {
    return values['question'] == props.resultKey + 1;
  })

  const defineColorToText = (answer_index, correct) => {
    if(answer_mark_value['answer'] == answer_index + 1) {
      return correct ? '#84FD96' : '#FF6868';
    }
    else {
      return '#fafafa';
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>{ `${props.resultKey + 1} - ${props.question}` } </Text>
      <View style={styles.result}>
        { 
          props.answers.map((answer, answer_index) => {
            const icon_name = answer['correct'] ? 'check' : 'times';

            const styleButton = {
              textContainer: {
                width: 320,
                flexDirection: 'row',
              },
              icon: {
                color: '#fafafa',
                alignSelf: 'center',
                width: 16,
              },
              textToResult: {
                color: defineColorToText(answer_index, answer['correct']),
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
    marginBottom: 15,
    alignItems: 'center'
  },
  questionTitle: {
    width: 340,
    fontSize: 22,
    color: '#F08080',
    marginBottom: 10,
    textAlign: 'justify'
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
