import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { IPost } from 'types/posts';
import Post from './Post';

type Props = {
  data: Array<IPost>;
  onOpen: (post: IPost) => void;
};

export const PostList = ({ data, onOpen }: Props) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>Nothing yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post: IPost) => post.id.toString()}
        renderItem={({ item }) => <Post onOpen={onOpen} post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noItems: {
    marginVertical: 10,
    textAlign: 'center',
  },
  wrapper: {
    padding: 10,
  },
});

export default PostList;
