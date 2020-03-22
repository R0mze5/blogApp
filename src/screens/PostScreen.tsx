import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import { THEME } from '@theme';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import AppHeaderIcon from 'components/AppHeaderIcon';
import { toggleBooked, removePost } from 'store/actions/post';
import { useDispatch, useSelector } from 'react-redux';
import { IPost } from 'types/posts';

interface Props {
  route: any;
  navigation: any;
}

export const PostScreen = ({ route, navigation }: Props) => {
  const { postId /* , booked */ } = route.params;

  const post: IPost = useSelector(state => state.post.allPosts.find((p: IPost) => p.id === postId));

  const booked = useSelector(state =>
    state.post.bookedPosts.some((thisPost: IPost) => thisPost.id === postId),
  );

  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  if (!post) {
    navigation.navigate('Main');
    return null;
  }
  /*   const toggleHandler = useCallback(
    () => {
      dispatch(toggleBooked(post.id))
    },
    [dispatch, postId],
  ) 

  useEffect(() => {
    navigation.setParams({toggleHandler})
  }, [toggleHandler]) */

  // useEffect(() => {
  //   navigation.setParams({booked})
  // }, [])

  const dispatch = useDispatch();

  const removeHandler = () => {
    Alert.alert(
      'delete post',
      'Are you sure?',
      [
        {
          text: 'cancel',
          style: 'cancel',
        },
        {
          text: 'remove',
          onPress: () => {
            dispatch(removePost(postId));
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title={'Take Photo'}
          iconName={iconName}
          onPress={() => dispatch(toggleBooked(post))}
        />
      </HeaderButtons>
    ),
    title: `Post ${postId} by ${new Date(post.date).toLocaleDateString()} `,
  });

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>

      <Button title={'Delete'} color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  textWrap: {
    padding: 10,
  },
  title: {},
});

export default PostScreen;
