import React from 'react'
import { Widget } from '../../../types'

type Props = {
    id: string,
    content: string,
    styles: Record<any, any>
}

const Text = ({id, content, styles}: Props) => {
    console.log(styles)
  return (
    <p style={{...styles}}>{content}</p>
  )
}

export default Text