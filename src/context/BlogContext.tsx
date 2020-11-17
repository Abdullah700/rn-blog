import React, {Reducer} from 'react';
import createDataContext from "./createDataContext";

interface IBLog {
    title: string
}

interface IAction {
    type: string
}

const actions = {
    ADD_BLOG_POST: 'add_blog_post'
}
const {ADD_BLOG_POST} = actions

const blogReducer: Reducer<IBLog[], IAction> = (state, {type}) => {
    switch (type) {
        case ADD_BLOG_POST:
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

const addBlogPosts = (dispatch: (arg0: { type: string; }) => void) => {
    return () => {
        dispatch({type: ADD_BLOG_POST})
    }
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPosts}, [])

