'use client'

import React, { MouseEventHandler, useContext, useEffect, useReducer, useState } from 'react'
import Col2 from '../components/Col2';
import { editorReducer, defaultEditor, editorContext, ACTIONS } from '../context/context';
import { useRouter } from 'next/navigation';
import { componantMap } from '../helpers/componentMap';
import Sidebar from '../components/sidebar/Sidebar';
import { DropArgument } from 'net';

const data = 
    {
        id: '12',
        content: [
            {
                id: '1',
                content: 'This is some Text',
                type: 'Text',
                name: 'Text',
                dropId: '0'
            },
            {
                id: '2',
                content: [],
                type: 'Col2',
                name: 'Col2',
                dropId: '1'
            }
        ],
        name: 'Col2',
        type: 'Col2'
    };


const Cms = () => {

    const [state, editorDispatch] = useReducer(editorReducer, {
        body: [],
        selected: ''
    });

    let i = false;
    useEffect(() => {
        if(i) return;
        i = true;
        editorDispatch({
            type: ACTIONS.ADD_WIDGET,
            payload: data
        });

        console.log(i);

        return () => {
           
        }
    }, [])

    const handleWidgetClick = (event: MouseEvent) => {
        let element = event.target as HTMLElement;
        let id;

        while(element) {

            if(element.id) {
               id = element.id;
               break; 
            }

            element = element.parentElement as HTMLElement;
        }

        editorDispatch({
            type: ACTIONS.SET_SELECTED,
            payload: id
        })
        console.log(state)
    }

    return (
        <div className='flex'>
            <editorContext.Provider value={{state, editorDispatch}}>
            <div className="w-[80%] bg-slate-100 h-[100vh]" onClick={handleWidgetClick}>
                <div className='flex justify-center py-3 gap-2 w-full mb-7 bg-slate-600'>
                    <button className='p-2 cursor-pointer border rounded-md flex flex-col justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
                        </svg>
                    </button>
                    <button className='p-2 cursor-pointer border rounded-md flex flex-col justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>
                    </button>
                </div>
               <div className='w-[50%] mx-auto bg-white h-[100%] p-4'>
                    {
                        (state.body.length > 0) 
                        &&
                        state.body.map((widget, index) => {
                            const Comp = componantMap[widget.name];
                            return(
                                <>
                                    <Comp key={widget.id} {...widget}/>
                                </>
                            );
                        })
                    }
                </div>
            </div> 
            <Sidebar />
            </editorContext.Provider>
        </div>
    )
}

export default Cms;