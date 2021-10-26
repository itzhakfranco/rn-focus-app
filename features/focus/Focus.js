import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

import RoundedButton from '../../components/RoundedButton';

import {fontSizes, paddingSizes, spacings} from '../../utils/fontSizes';

const Focus = ({addSubject}) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.titleContainer}>
      <View style={styles.container}>
        <Text style={styles.title}> What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            onSubmitEditing={({nativeEvent}) => {
              setTmpItem(nativeEvent.text);
            }}
            style={{flex: 1, marginRight: 20}}
          />
          <RoundedButton
            title="+"
            size="50"
            onPress={() => {
              addSubject(tmpItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    flex: 0.5,
    padding: spacings.md,
    justifyContent: 'center',
  },
  title: {color: 'white', fontWeight: 'bold', fontSize: fontSizes.lg},
  inputContainer: {
    paddingTop: spacings.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Focus;
