import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

const CheckBoxCompleteTask = ({isChecked = false}) => {
  return <View style={isChecked ? styles.checked : styles.unchecked} />;
};

const styles = StyleSheet.create({
  checked: {
    width: 25,
    height: 25,
    padding: 10,
    borderRadius: 40,
    backgroundColor: theme.colors.bg.PRIMARY,
  },
  unchecked: {
    width: 25,
    height: 25,
    padding: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: theme.colors.ui.BLACK,
  },
});

export default React.memo(CheckBoxCompleteTask);
