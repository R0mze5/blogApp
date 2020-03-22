import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeaderIcon from 'components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

interface Props {
  navigation: any;
}

export const AboutScreen = ({ navigation }: Props) => {
  navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title={'Toggle Drawer'}
          iconName={'ios-menu'}
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  });

  return (
    <View style={styles.center}>
      <Text>Version 1.0.0</Text>
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
