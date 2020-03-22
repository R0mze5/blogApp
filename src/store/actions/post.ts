import * as FileSystem from 'expo-file-system';
import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from 'store/types';
import { DB } from 'db';
import { IPost, TId } from 'types/posts';
import { Dispatch } from 'redux';

export const loadPost = () => {
  return async (dispatch: Dispatch) => {
    const posts = await DB.getPosts();

    dispatch({
      type: LOAD_POSTS,
      payload: posts || [],
    });
  };
};
export const toggleBooked = (post: IPost) => async (dispatch: Dispatch) => {
  await DB.updatePost(post);
  dispatch({
    type: TOGGLE_BOOKED,
    payload: post.id,
  });
};
export const removePost = (id: TId) => async (dispatch: Dispatch) => {
  await DB.removePost(id);

  dispatch({
    type: REMOVE_POST,
    payload: id,
  });
};

export const addPost = (post: IPost) => async (dispatch: Dispatch) => {
  const fileName = post.img.split('/').pop();

  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    });
  } catch (error) {
    console.log('Error write', e);
  }

  const payload = { ...post, img: newPath };

  const id = await DB.createPost(payload);

  payload.id = id;

  dispatch({
    type: ADD_POST,
    payload,
  });
};
