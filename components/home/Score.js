import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ScoreChange from '../shared/ScoreChange'

export default function(props) {
  return (
    <View>
      <Text style={styles(props).scoreInitial}>
        { props.component == 'question' ? ScoreChange.changeScoreValues()['current'] : ScoreChange.changeCorrectValues(false)['current'] }/
        <Text style={styles(props).scoreFinal}>
        {ScoreChange.changeScoreValues()['total']}
        </Text>
      </Text>
    </View>
  );
}

const styles = (props) => StyleSheet.create({
  scoreInitial: {
    color: '#F4978E',
    fontWeight: 'bold',
    fontSize: props.fontSize,
    marginLeft: 10
  },
  scoreFinal: {
    fontWeight: 'normal'
  }
});
