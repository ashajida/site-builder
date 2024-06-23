type Margin = {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string
}

type Padding = {
    top: string,
    bottom: string,
    left: string
}

type Border = {
    top: string,
    bottom: string,
    left: string
}

type State = {
    margin: Margin,
    padding: Padding,
    border: Border
}

type ComponentSettings = {
    id: string
    margin: Margin
}