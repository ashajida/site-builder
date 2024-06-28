'use client'

import React, { MouseEventHandler, useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { Widget } from '../../../types';
import { componantMap } from '../helpers/componentMap';
import { ACTIONS, editorContext } from '../context/context';
import { updateContentRecursion, updateRecursion } from '../helpers/updateRecursion';

type Props = {
  id: string,
  content: Array<Widget>,
  styles: Record<any, any>,
}

type DropState = {
  id: string,
  active: boolean
}

const Col2 = ({ id, content, styles }: Props) => {

  console.log('test..',content.length)

  const { state, editorDispatch } = useContext(editorContext);

  const [dropState, setDropState] = useState<Array<DropState>>([
    {
      id: '0',
      active: false
    },
    {
      id: '1',
      active: false
    }
  ])
  
  const handleOnDrop = (e: Event) => {
    e.preventDefault();
    let element = e.target as HTMLElement;
    const id = e.dataTransfer.getData("text") as string;
    let dropId;

    while(element) {
      if(element.getAttribute('drop-id')) {
        dropId = element.getAttribute('drop-id') as string;
        break;
      }
      element = element.parentElement as HTMLElement;
    }


    const x = {
      id: '12378',
      name: id,
      type: id,
      content: 'New Component',
      dropId: dropId,
  } as Widget;


    const data = updateContentRecursion(state.body, state.selected, x)

    const d = dropState.map((drop: DropState) => {
      if(drop.id == dropId) {
        drop.active = true;
        return drop;
      }
      return drop;
    });


    setDropState(d);

    console.log(d)
  
    editorDispatch({
      type: ACTIONS.UPDATE_WIDGET,
      payload: data
    })


}

const handleOnDragOver = (e: DragEvent) => {
    e.preventDefault();
}

  return (
    <section id={id} className={`grid lg:grid-cols-2 w-100 gap-5 py-8`} style={{ ...styles }}>
    
     {
     (content.length > 0) 
     &&
     <>
     <div drop-id="0" className={`col-span-1 ${!dropState[0].active ? 'bg-slate-50 border h-[300px] rounded-md' : ''}`} onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
      {
        content.map((widget, index) => {
          const Comp = componantMap[widget.name]
          if(widget.dropId == '0') {
          return(
            <>
            <Comp {...widget}></Comp>
            </>
          );
        }
         })
      }
     </div>
     <div drop-id="1" className={`col-span-1 ${!dropState[1].active ? 'bg-slate-50 border h-[300px] rounded-md' : ''}`} onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
     {
        content.map((widget, index) => {
          const Comp = componantMap[widget.name]
          if(widget.dropId == '1') {
          return(
            <>
            <Comp {...widget}></Comp>
            </>
          );
        }
         })
      }
     </div>
     </>
     }
    
    {
      (!dropState[0].active || !dropState[1].active ) 
      &&
      <>
      <div className='col-span-1 bg-slate-50 border rounded-md h-[300px] w-full'></div>
      <div className='col-span-1 bg-slate-50 border rounded-md h-[300px] w-full'></div>
     </>
    }



    </section>
  )
}

export default Col2; 