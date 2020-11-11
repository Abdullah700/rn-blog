import React, {createContext, FC, useReducer} from 'react';

export default (reducer,actions,initialState)=>{
    const Context = createContext();
    const Provider:FC = ({children}) => {
      const [state,dispatch] =  useReducer(reducer,initialState)

        return (
            <Context.Provider value={initialState}>
                {children}
            </Context.Provider>
        )
    }
}

