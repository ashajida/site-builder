import { editorContext, ACTIONS } from '@/app/context/context';
import { updateRecursion } from '@/app/helpers/updateRecursion';
import React, { ChangeEvent, useContext } from 'react'
import Widgets from './Widgets';

const Styles = () => {
    const { state, editorDispatch } = useContext(editorContext);

    const handleAlignment = (e: MouseEvent) => {
      const element = e.target as HTMLButtonElement;
      let value = element.dataset.align;
  
      if(!value) {
          value = element.parentElement?.dataset.align;
      }
  
      const data = updateRecursion(state.body, '1', {textAlign: value})
  
      editorDispatch({
        type: ACTIONS.UPDATE_WIDGET,
        payload: data
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
                widget.styles = {
                  ...widget.styles, 
                  [e.target.name]: value
                }
              }
            })
          ]
        }
      })
    }
  
  return (
    <div className="w-full bg-white mb-5">
    <div className='flex justify-around gap-[8px] mb-2 border rounded-md p-2'>
    <button data-align='left' onClick={handleAlignment}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
    </button>
    <button data-align="center" onClick={handleAlignment}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-center" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
    </button>
    <button data-align="right" onClick={handleAlignment}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
    </button>
    </div>
    <textarea className='border rounded-md w-[100%] p-2 block mb-2' />
    <div className='flex gap-[8px] mb-2'>
      <input className='border rounded-md max-w-9' name="marginTop" onChange={handleMargin} />
      <input className='border rounded-md max-w-9' name="marginLeft" onChange={handleMargin} />
      <input className='border rounded-md max-w-9' name="marginBottom" onChange={handleMargin} />
      <input className='border rounded-md max-w-9' name="marginRight" onChange={handleMargin} />
    </div>
    <div className='border rounded-md p-2 flex justify-between'>
      <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-bottom" viewBox="0 0 16 16">
          <rect width="4" height="12" x="6" y="1" rx="1"/>
          <path d="M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z"/>
        </svg>
      </button>
      <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-center" viewBox="0 0 16 16">
          <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1m0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-end" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
  <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"/>
</svg>
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-middle" viewBox="0 0 16 16">
  <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8m14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5"/>
</svg>
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-start" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"/>
  <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
</svg>
      </button> 
      <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-top" viewBox="0 0 16 16">
          <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
          <path d="M1.5 2a.5.5 0 0 1 0-1zm13-1a.5.5 0 0 1 0 1zm-13 0h13v1h-13z"/>
        </svg>
      </button>
      <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-distribute-horizontal" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5m-13 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
          <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/>
        </svg>
      </button>
      <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-distribute-vertical" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5m0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5"/>
          <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
      </button>
    </div>
    <button className='btn btn-primary'></button>
</div>
  )
}

export default Styles