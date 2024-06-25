import React from 'react'
import { Widget } from '../../../types'

type Props = {
    id: string,
    content: string
}

const Text = ({id, content}: Props) => {
  return (
    <p>{content}</p>
  )
}

export default Text