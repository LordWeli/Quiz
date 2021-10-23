import React from 'react';
import { StyleSheet, View } from 'react-native';
import Score from './Score';
import Title from './Title';

export default function() {
  return (
    <View style={styles.container}>
      <Score/>
      <Title width={'70%'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 70,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});