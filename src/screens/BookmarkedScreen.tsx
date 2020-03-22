import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import AppHeaderIcon from 'components/AppHeaderIcon';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PostList from 'components/PostList';
import { useSelector } from 'react-redux';
import { IPost } from 'types/posts';

type RootStackParamList = {
  Main: {};
  Post: {};
  About: {};
};

type BookmarkedScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

type Props = {
  navigation: BookmarkedScreenNavigationProp;
};

export const BookmarkedScreen = (props: Props) => {
  const { navigation } = props;

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
    title: 'Favorite',
  });

  const openPostHandler = (post: IPost) => {
    navigation.navigate('Post', { postId: post.id, date: post.date });
  };

  const bookedPosts = useSelector(state => state.post.bookedPosts);

  return <PostList data={bookedPosts} onOpen={openPostHandler} />;
};

export default BookmarkedScreen;
