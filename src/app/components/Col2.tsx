'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { Widget } from '../../../types';
import { componantMap } from '../helpers/componentMap';

type Props = {
  id: string,
  content: Array<Widget>
}

const Col2 = ({ id, content }: Props) => {


  const handleClick = () => {

  }

  useEffect(() => {
  

    return () => {

    }
  }, [])


  return (
    <div id={id} onClick={handleClick} className={`grid lg:grid-cols-2 w-100 gap-5 hover:bg-black`} style={
     {
     }
    }>
     {
     (content.length > 0) 
     &&
     content.map((widget, index) => {
      const Comp = componantMap[widget.name]
      return(
        <div key={index} className='col-span-1'>
        <Comp></Comp>
        </div>
      );
     })
     }
    </div>
  )
}

export default Col2; 