'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { Widget } from '../../../types';
import { componantMap } from '../helpers/componentMap';

type Props = {
  id: string,
  content: Array<Widget>,
  styles: Record<any, any>
}

const Col2 = ({ id, content, styles }: Props) => {


  const handleClick = () => {

  }

  useEffect(() => {
  

    return () => {

    }
  }, [])


  return (
    <div id={id} onClick={handleClick} className={`grid lg:grid-cols-2 w-100 gap-5 hover:bg-black`} style={{ ...styles }}>
     {
     (content.length > 0) 
     &&
     content.map((widget, index) => {
      const Comp = componantMap[widget.name]
      return(
        <div key={widget.id} className='col-span-1' style={{...widget.style}} id={widget.id}>
        <Comp {...widget}></Comp>
        </div>
      );
     })
     }
    </div>
  )
}

export default Col2; 