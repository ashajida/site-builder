import React, { ChangeEvent, MouseEventHandler, useContext, useReducer } from 'react'
import SpaceManager from '../SpaceManager'
import { ACTIONS, editorContext, editorReducer } from '@/app/context/context';

const Sidebar = () => {

  const { state, editorDispatch } = useContext(editorContext);

  const updateEditor = () => {
    
  }

  const handleAlignment = (e: any) => {
    const align = e.target.dataset.align;
    editorDispatch({
      type: ACTIONS.UPDATE_WIDGET,
      payload: {
        ...state, 
        body: [
          state.body.map((widget) => {
            if(widget.id == state.selected) {
              widget.style = {
                ...widget.style, 
                textAlign: align
              }
            }
          })
        ]
      }
    })
  }

  const handleMargin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    editorDispatch({
      type: ACTIONS.UPDATE_WIDGET,
      payload: {
        ...state, 
        body: [
          state.body.map((widget) => {
            if(widget.id == state.selected) {
              widget.style = {
                ...widget.style, 
                [e.target.name]: value
              }
            }
          })
        ]
      }
    })
  }

  return (
    <div className="col-span-1 bg-white h-[100vh] p-4">
      <form>
          <div className='flex align-middle'>
            <svg data-align='start' onClick={handleAlignment} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-start" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"/>
              <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
            </svg>
            <svg data-align='center' onClick={handleAlignment} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-center" viewBox="0 0 16 16">
              <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1m0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
            <svg data-align='end' onClick={handleAlignment} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-end" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
              <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"/>
            </svg>
          </div>
          <div>
            <input name="marginTop" onChange={handleMargin} />
            <input name="marginLeft" onChange={handleMargin} />
            <input name="marginBottom" onChange={handleMargin} />
            <input name="marginRight" onChange={handleMargin} />
          </div>
          <button className='btn btn-primary'></button>
      </form>
    </div>
  )
}

export default sidebar