import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Score from '../home/Score';
import Title from '../home/Title';
import ProgressBar from './ProgressBar';

export default function(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Icon name="angle-left" size={20} style={styles.icon} />
        <Title width={'90%'}/>
      </View>

      <ProgressBar quantity={props.quantity}/>

      <View style={styles.score}>
        <Score/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 5,
  },
  titleRow: {
    flexDirection:'row',
    marginBottom: 10
  },
  score: {
    alignItems: 'flex-start',
    marginLeft: -10
  },
  icon: {
    color: "#F08080",
    alignSelf: 'center',
  }
});
