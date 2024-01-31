import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

type Props = {
  title: string;
};

export const CustomHeader = ({ title }: Props) => {
  return (
    <View style={styles.containerHeader}>
      <Text testID="textHeader" style={styles.textHeader}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    width: '100%',
    height: 56,
    padding: 16,
    backgroundColor: theme.colors.bg.HEADER_BG,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textHeader: {
    width: '100%',
    height: 24,
    color: theme.colors.text.TITLE,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: theme.fonts.Inter_Bold,
    lineHeight: 24,
    textAlign: 'center',
  },
});
