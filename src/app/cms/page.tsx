'use client'

import React, { useContext, useEffect, useReducer, useState } from 'react'
import SpaceManager from '../components/SpaceManager';
import Col2 from '../components/Col2';
import { editorReducer, defaultEditor, editorContext, ACTIONS } from '../context/context';
import { useRouter } from 'next/navigation';
import { componantMap } from '../helpers/componentMap';
import Sidebar from '../components/sidebar/sidebar';

const data = 
    {
        id: '12',
        content: [
            {
                id: '1',
                content: 'This is some Text',
                type: 'Text',
                name: 'Text'
            },
            {
                id: '2',
                content: [],
                type: 'Col2',
                name: 'Col2'
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

    return (
        <div className='grid grid-cols-4'>
            <editorContext.Provider value={{state, editorDispatch}}>
            <div className=" col-span-3 bg-slate-100 h-[100vh]">
               <div className='w-[50%] mx-auto bg-white h-[100%] p-4'>
                    {
                        (state.body.length > 0) 
                        &&
                        state.body.map((widget, index) => {
                            console.log(widget);
                            const Comp = componantMap[widget.name];
                            return(
                                <>
                                    <Comp key={widget.id} {...widget} />
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