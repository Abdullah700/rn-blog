import React, {createContext, FC, Reducer, useReducer} from 'react';
import {IAction, IBLog} from './BlogContext';

export default (reducer: React.Reducer<IBLog[], IAction>, actions: any, init: any[]) => {
    const Context = createContext(undefined);
    const Provider: FC = ({children}) => {
        const [state, dispatch] = useReducer(reducer, init)

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

