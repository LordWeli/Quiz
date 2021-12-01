import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './Title';

export default function() {
  return (
    <View style={styles.container}>
      <Title width={'95%'}/>
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
