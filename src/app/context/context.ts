import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Action, defaultEditorContext, Editor, Widget } from "../../../types";

export const defaultEditor = {
    state: {
        body: [],
        selected: ''
    },
    editorDispatch: () => undefined
} as defaultEditorContext;

export const ACTIONS = {
    GET_EDITOR: 'GET_EDITOR',
    SET_SELECTED: 'SET_SELECTED',
    ADD_WIDGET: 'ADD_WIDGET',
    ADD_CONTENT: 'ADD_CONTENT'
}

export const editorReducer = (state: Editor, action: Action) : Editor => {

switch (action.type) {
    case ACTIONS.GET_EDITOR:
        return state;
        break;

    case ACTIONS.SET_SELECTED:
        return {
            ...state,
            selected: action.payload as string
        }
        break;

    case ACTIONS.ADD_WIDGET:
        return {
            ...state,
            body: [
                ...state.body,
                action.payload as Widget
            ]
        }
        break;

    default:
        return state;
}
}

export const widgetReducer = (state: Widget, action: Action) => {
    switch (action.type) {
        case ACTIONS.ADD_CONTENT:
            return {
                ...state, 
                content: action.payload
            }
            break;
    
        default:
            return state;
    }
}

export const sidebarReducer = (state: Widget, action: Action) => {
    switch (action.type) {
        case ACTIONS.ADD_CONTENT:
            return {
                ...state, 
                content: action.payload
            }
            break;
    
        default:
            break;
    }
}

export const editorContext = createContext<defaultEditorContext>(defaultEditor);


