import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  containerInput: {
    width: "100%",
    height: 43,
    borderColor: "#666666",
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    padding: 10,
  },
  labelInput: {
    fontFamily: theme.fonts.Roboto_Regular,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    color: "#1E1E1E",
    lineHeight: 14.4,
    marginRight: 5
  },
  labelError: {
    width: 7,
    height: 14,
    fontSize: 18,
    color: theme.colors.text.LABEL_ERROR,
  },
  viewLabel: {
    flexDirection: "row",
    marginTop: 7,
    marginBottom: 7,
  },
});
