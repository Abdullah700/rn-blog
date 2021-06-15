import React, { Reducer } from 'react';
import { useApi } from '../api';
import { Actions, IAction, IBLog } from '../interfaces';
import createDataContext from './createDataContext';

const blogReducer: Reducer<IBLog[], IAction> = (state, { type, payload }) => {
  switch (type) {
    case 'GET_BLOG_POST':
      return payload;
    case 'ADD_BLOG_POST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999999),
          title: payload.title || `Blog Post #${state.length + 1}`,
          content: payload.content || `Blog Post #${state.length * 9}`,
        },
      ];
    case 'DELETE_BLOG_POST':
      return state.filter((blogPost) => blogPost.id !== payload.id);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch: (arg0: IAction) => void) => {
  const { Axios } = useApi();
  return async () => {
    const { data } = await Axios.get('/blog_posts');
    dispatch({ type: 'GET_BLOG_POST', payload: data });
  };
};

const addBlogPosts = (dispatch: (arg0: IAction) => void) => {
  return (title: string, content: string) => {
    dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
  };
};
const deleteBlogPosts = (dispatch: (arg0: IAction) => void) => {
  return (id: number | string) => {
    dispatch({ type: 'DELETE_BLOG_POST', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, deleteBlogPosts },
  []
);
