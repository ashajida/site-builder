import React, { ChangeEvent, MouseEventHandler, useContext, useReducer } from 'react'
import { ACTIONS, editorContext, editorReducer } from '@/app/context/context';
import { updateRecursion } from '@/app/helpers/updateRecursion';
import Styles from './Styles';
import Widgets from './Widgets';

const Sidebar = () => {
  const { state, editorDispatch } = useContext(editorContext);
  const selected = state.selected;
  return (
    <div className='w-[20%] p-4'>
     {
       selected
       &&
       <Styles />
     }
    <Widgets />
    </div>
    
  )
}

export default Sidebar