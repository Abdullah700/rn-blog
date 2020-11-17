import React, {createContext, FC, Reducer, useReducer} from 'react';
import {IAction} from "./BlogContext";

export default (reducer: React.Reducer<any[], >, actions: { addBlogPosts: (dispatch: (arg0: { type: string }) => void) => () => void }, p: any[]) => {
    const Context = createContext(undefined);
    const Provider: FC = ({children}) => {
        const [state, dispatch] = useReducer(reducer, [])

        const boundActions:any = {};

        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{state,...boundActions}}>
                {children}
            </Context.Provider>
        )
    }


    return {Context, Provider}
}

