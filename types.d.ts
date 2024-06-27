import { Dispatch } from "react"

type Widget = {
    id: string,
    name: string,
    content?: Array<Widget> | string,
    type: string,
    styles?: Record<any, any>,
    dropId?: string,
}

type Editor = {
    body: Array<Widget> | [],
    selected: string
}



type Action = {
    type: string,
    payload?: Record<any, any> | string | Array<Widget>
}

type defaultEditorContext = {
    state: Editor,
    editorDispatch: Dispatch<Action>
}