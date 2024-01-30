import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

const InputTask = ({ value, onChangeText, error }) => {
  return (
    <>
      <View style={styles.viewLabel}>
        <Text testID="labelTask" style={styles.labelInput}>
          Name
        </Text>
        {error && (
          <Text testID="labelTask" style={styles.labelError}>
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
