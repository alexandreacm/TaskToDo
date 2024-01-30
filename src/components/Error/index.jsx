import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const Error = ({ error }) => {
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
