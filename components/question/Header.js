import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Score from '../home/Score';
import Title from '../home/Title';
import ProgressBar from './ProgressBar';

export default function(props) {

  return (
    <View style={styles(props).container}>
      <View style={styles(props).titleRow}>
        <TouchableOpacity style={styles(props).iconButton} onPress={()=> { props.navigation.navigate('Home') }}>
          <Icon name="angle-left" size={20} style={styles(props).icon} />
        </TouchableOpacity>

        <Title width={'80%'}/>

        { props.nextButtonVisible ? (
          <TouchableOpacity style={styles(props).nextButton} onPress={()=> {  }}>
            <Text style={styles(props).nextTitle} >Próximo</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles(props).progressBarContainer}>
        <ProgressBar quantity={props.quantity}/>

        <View style={styles(props).score}>
          <Score fontSize={16}/>
        </View>
      </View>
    </View>
  );
}

const styles = (props) => StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 5,
    width: '100%'
  },
  titleRow: {
    flexDirection:'row',
    marginBottom: 15,
  },
  score: {
    alignItems: 'flex-start',
    marginLeft: -10
  },
  iconButton: {
    alignSelf: 'center',
    width: '10%',
  },
  icon: {
    color: "#F08080",
    paddingLeft: 20,
  },
  nextButton: {
    alignSelf: 'center',
    width: '15%',
    marginLeft: -35,
  },
  nextTitle: {
    color: "#F08080",
    textAlign: 'right',
    fontWeight: '500'
  },
  progressBarContainer: {
    paddingLeft: 20,
  }
});
