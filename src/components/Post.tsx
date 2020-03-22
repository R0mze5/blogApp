import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { IPost } from 'types/posts';

interface Props {
  post: IPost;
  onOpen: (post: IPost) => void;
}

const Post = ({ post, onOpen }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{post.date}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  textWrap: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    width: '100%',
  },
  title: {
    color: '#ffffff',
  },
});

export default Post;
