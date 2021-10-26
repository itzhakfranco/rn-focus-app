import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Focus from './features/focus/Focus';

const App = () => {
  const [focusObject, setFocusObject] = useState(null);
  return (
    <View style={styles.container}>
      {focusObject == null && <Focus addSubject={setFocusObject} />}
      <Text>{focusObject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 50, backgroundColor: '#252250'},
});

export default App;
