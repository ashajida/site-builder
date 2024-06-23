import { createContext, Dispatch, SetStateAction, useContext } from "react";


type DefaultEditor = {
    selected
}



export const sidebarContext = createContext(defaultState);

export const selectedComponentContext = createContext(defaultSelected);


