import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  containerLabel: {
    flexDirection: "row",
    marginTop: 7,
    marginBottom: 7,
  },
  labelInput: {
    fontFamily: theme.fonts.Roboto_Regular,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    color: "#1E1E1E",
    lineHeight: 14.4,
  },
  labelError: {
    width: 7,
    height: 14,
    color: "#F63737",
  },
});
