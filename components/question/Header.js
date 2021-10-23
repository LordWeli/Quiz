import React from 'react';
import { StyleSheet, View } from 'react-native';
import Score from '../home/Score';
import Title from '../home/Title';
import ProgressBar from './ProgressBar';

export default function(props) {
  return (
    <View>
      <View style={styles.title}>
        <Title/>
      </View>

      <ProgressBar quantity={props.quantity}/>

      <View style={styles.score}>
        <Score/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
  score: {
    alignItems: 'flex-start',
    marginLeft: -10
  }
});
