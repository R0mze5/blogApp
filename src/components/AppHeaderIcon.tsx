import React from 'react';

import { HeaderButton } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import { THEME } from '@theme';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string;
}

export const AppHeaderIcon = (props: Props) => {
  return (
    <HeaderButton
      title={props.title}
      {...props}
      iconSize={24}
      color={Platform.OS === 'android' ? '#ffffff' : THEME.MAIN_COLOR}
      IconComponent={Ionicons}
    />
  );
};

export default AppHeaderIcon;
