import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import AppHeaderIcon from 'components/AppHeaderIcon';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PostList from 'components/PostList';
import { loadPost } from 'store/actions/post';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { THEME } from '@theme';
import { IPost } from 'types/posts';

type RootStackParamList = {
  Main: {};
  Post: {};
  About: {};
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

type Props = {
  navigation: MainScreenNavigationProp;
};

export const MainScreen = (props: Props) => {
  const { navigation } = props;

  // console.log(props);

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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title={'Take Photo'}
          iconName={'ios-camera'}
          onPress={() => navigation.navigate('CreateNavigation')}
        />
      </HeaderButtons>
    ),
  });

  const openPostHandler = (post: IPost) => {
    navigation.navigate('Post', { postId: post.id, date: post.date });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPost());
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);
  const loading = useSelector(state => state.post.loading);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }

  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MainScreen;
