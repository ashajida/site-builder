'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { selectedComponentContext, sidebarContext } from '../context/context'
import { useRouter } from 'next/router';

type Props = {
  id: string,
  test: string
}

const Col2 = ({ id, test }: Props) => {

  const {settings, setSettings} = useContext(sidebarContext);
  const {selectedComponent, setSelectedComponent} = useContext(selectedComponentContext);

  //const localSettings = useState
  const ref = useRef<HTMLDivElement>(null);


  const handleClick = () => {
    const id = ref.current?.getAttribute('id');
    setSelectedComponent(id!);
  }

  useEffect(() => {
   

    if (!settings.some(setting => setting.id === id)) {
      setSettings([...settings,
        {
          id: id,
          margin: {
            top: test,
            left: test,
            right: test,
            bottom: test,
          }
        }
      ])
    }

    return () => {

    }
  }, [settings, setSettings, id, test])

  const x = settings.find((item) => item.id == id);

  return (
    <div id={id} onClick={handleClick} className={`grid lg:grid-cols-2 w-100 gap-5 hover:bg-black`} ref={ref} style={
     {
      margin: `${x?.margin.top}px`,
     }
    }>
     <div className="col-span-1 bg-slate-100  h-[200px]">

     </div>
     <div className="col-span-1 bg-slate-100 h-[200px]">

     </div>
    </div>
  )
}

export default Col2; 