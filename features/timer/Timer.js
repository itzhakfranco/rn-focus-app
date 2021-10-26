import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import CountDown from '../../components/CountDown';
import RoundedButton from '../../components/RoundedButton';

const Timer = ({focusObject}) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <CountDown isPaused={!isStarted} />
      </View>
      <View style={{paddingTop: 80}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusObject}</Text>
      </View>
      <View style={styles.btnWrapper}>
        {isStarted ? (
          <RoundedButton
            onPress={() => {
              setIsStarted(false);
            }}
            title="pause"
            size={50}
          />
        ) : (
          <RoundedButton
            onPress={() => setIsStarted(true)}
            title="start"
            size={50}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {color: 'white', textAlign: 'center'},
  task: {color: 'white', fontWeight: 'bold', textAlign: 'center'},
  countDown: {flex: 0.5, alignItems: 'center', justifyContent: 'center'},
  btnWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Timer;
