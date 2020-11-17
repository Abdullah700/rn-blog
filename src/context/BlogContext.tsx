import React, {Reducer} from 'react';
import createDataContext from "./createDataContext";

export interface IBLog {
    title: string
    id:string|number
}

export interface IAction {
    type?: string
    payload?:any
}

const actions = {
    ADD_BLOG_POST: 'add_blog_post',
    DELETE_BLOG_POST: 'delete_blog_post'
}
const {ADD_BLOG_POST, DELETE_BLOG_POST} = actions

const blogReducer: Reducer<IBLog[], IAction> = (state, {type,payload}) => {
    switch (type) {
        case ADD_BLOG_POST:
            return [...state, {id: Math.floor(Math.random() * 99999999),title: `Blog Post #${state.length + 1}`}]
        case DELETE_BLOG_POST:
            return state.filter((blogPost) => blogPost.id !== payload)
        default:
            return state
    }
}

const addBlogPosts = (dispatch: (arg0: { type: string; }) => void) => {
    return () => {
        dispatch({type: ADD_BLOG_POST})
    }
}
const deleteBlogPosts = (dispatch: (arg0: IAction) => void) => {
    return (id:number|string) => {
        dispatch({type: DELETE_BLOG_POST, payload:id})
    }
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPosts, deleteBlogPosts}, [])

