import React, { ChangeEvent, MouseEventHandler, useContext, useReducer } from 'react'
import { ACTIONS, editorContext, editorReducer } from '@/app/context/context';
import { updateRecursion } from '@/app/helpers/updateRecursion';
import Styles from './Styles';

const Sidebar = () => {
  const { state, editorDispatch } = useContext(editorContext);
  const selected = state.selected;
  return (
    <div className='w-[20%]'>
     {
       selected
       &&
       <Styles />
     }
    </div>
    
  )
}

export default Sidebar