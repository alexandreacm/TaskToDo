// React
import React, { useCallback } from "react";
import { Text, Pressable } from "react-native";

import { presets } from "./styles";

const Button = ({ text, onPress, color, disabled, style, textStyle }) => {
  // const { styles } = generateButtonStyles(theme);
  const preset = presets(color, disabled);

  const styleButton = useCallback((pressed = false) => {
    return {
      opacity: pressed ? 0.7 : 1,
    };
  }, []);

  const styleDisableTextButton = useCallback(() => {
    if (disabled) {
      return {
        color: "#7C8898",
      };
    } else {
      return {};
    }
  }, [disabled]);

  return (
    <Pressable
      testID={"button"}
      disabled={disabled}
      accessible={true}
      style={({ pressed }) => [
        preset.button,
        { height: 40 },
        style,
        styleButton(pressed),
      ]}
      onPress={onPress ? onPress : () => {}}
    >
      <Text style={[textStyle, styleDisableTextButton()]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
