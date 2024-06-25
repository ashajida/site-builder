import { Dispatch } from "react"

type Widget = {
    id: string,
    name: string,
    content: Array<Widget>,
    type: string,
    style: Record<any, any>
}

type Editor = {
    body: Array<Widget> | [],
    selected: string
}



type Action = {
    type: string,
    payload?: Record<any, any> | string
}

type defaultEditorContext = {
    state: Editor,
    editorDispatch: Dispatch<Action>
}