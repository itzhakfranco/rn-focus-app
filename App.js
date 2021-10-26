import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fontSizes, paddingSizes, spacings} from './utils/fontSizes';

import Focus from './features/focus/Focus';
import Timer from './features/timer/Timer';
const App = () => {
  const [focusObject, setFocusObject] = useState('gardening');
  return (
    <View style={styles.container}>
      {focusObject ? (
        <Timer focusObject={focusObject} />
      ) : (
        <Focus addSubject={setFocusObject} />
      )}
      <Text>{focusObject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    paddingTop: spacings.xxl,
  },
});

export default App;
