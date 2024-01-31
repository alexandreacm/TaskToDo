import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  error: boolean;
};

export const Error = ({ error }: Props) => {
  return (
    <View style={styles.containerLabel}>
      <Text testID="labelTask" style={styles.labelInput}>
        Name - {error}
      </Text>
      {error ? (
        <Text testID="labelTask" style={styles.labelError}>
          *
        </Text>
      ) : null}
    </View>
  );
};
