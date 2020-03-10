import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

export const AboutScreen = (props: Props) => {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AboutScreen;
