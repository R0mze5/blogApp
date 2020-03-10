import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

export const CreateScreen = (props: Props) => {
  return (
    <View style={styles.center}>
      <Text>CreateScreen</Text>
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

export default CreateScreen;
