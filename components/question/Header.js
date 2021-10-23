import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Score from '../home/Score';
import Title from '../home/Title';
import ProgressBar from './ProgressBar';

export default function(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableOpacity style={styles.iconButton} onPress={()=> { props.navigation.navigate('Home') }}>
          <Icon name="angle-left" size={20} style={styles.icon} />
        </TouchableOpacity>

        <Title width={'75%'}/>
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
    marginBottom: 15
  },
  score: {
    alignItems: 'flex-start',
    marginLeft: -10
  },
  iconButton: {
    alignSelf: 'center',
  },
  icon: {
    color: "#F08080",
    paddingLeft: 10,
    paddingRight: 15,
  }
});