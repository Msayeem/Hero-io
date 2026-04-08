import React, { createContext, useState } from 'react';

export const AppContext=createContext();

const Context = ({children}) => {

let [app, setApp]=useState([]);

    return <AppContext.Provider value={{app, setApp}}>
        {children}
    </AppContext.Provider>
};

export default Context;