import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

type Props = {
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
};

const InputTask = ({value, onChangeText, error}: Props) => {
  return (
    <>
      <View style={styles.viewLabel}>
        <Text testID="labelTask" style={styles.labelInput}>
          Name
        </Text>
        {error && (
          <Text testID="labelTaskError" style={styles.labelError}>
            *
          </Text>
        )}
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          testID="inputTask"
          placeholder="New Name"
          placeholderTextColor="#666666"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
};

export default React.memo(InputTask);
