import React from 'react';
import { StyleSheet, View } from 'react-native';
import Score from './Score';
import Title from './Title';

export default function() {
  return (
    <View style={styles.container}>
      {/* <Score fontSize={16}/> */}
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
