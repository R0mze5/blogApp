import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from 'store/types';
import { IPost } from 'types/posts';

const initialState = {
  loading: true,
  allPosts: [],
  bookedPosts: [],
};

export const postReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post: IPost) => post.booked),
        loading: false,
      };
    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map((post: IPost) => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }
        return post;
      });

      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((post: IPost) => post.booked),
      };
    case REMOVE_POST: {
      return {
        ...state,
        allPosts: state.allPosts.filter((post: IPost) => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter((post: IPost) => post.id !== action.payload),
      };
    }
    case ADD_POST: {
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts],
      };
    }
    default:
      return state;
  }
};
