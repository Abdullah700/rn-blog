import React, {createContext, FC, Reducer, useReducer} from 'react';

interface IContext {
    blogPosts: IBLog[],

    addBlogPosts(): void
}

interface IBLog {
    title: string
}

const actions = {
    ADD_BLOG_POST: 'add_blog_post'
}

const blogReducer: Reducer<IBLog[], { type: string }> = (state, {type}) => {
    switch (type) {
        case 'add_blog_post':
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

const BlogContext = createContext<IContext>(undefined!);

export const BlogProvider: FC = ({children}) => {
    const {ADD_BLOG_POST} = actions;
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    const addBlogPosts = () => {
        dispatch({type: ADD_BLOG_POST})
    }
    return <BlogContext.Provider
        value={{blogPosts, addBlogPosts}}>{children}</BlogContext.Provider>;
};


export default BlogContext
