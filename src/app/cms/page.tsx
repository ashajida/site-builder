'use client'

import React, { useContext, useReducer, useState } from 'react'
import SpaceManager from '../components/SpaceManager';
import Col2 from '../components/Col2';
import { sidebarContext, selectedComponentContext, editorReducer, defaultEditor, editorContext } from '../context/context';
import { useRouter } from 'next/navigation';




const Cms = () => {

    const [state, editorDispatch] = useReducer(editorReducer, {
        body: [],
        selected: ''
    });

    const ComponentsMap = {
        Col2,
    } as const

    return (
        <div className='grid grid-cols-4'>
            <editorContext.Provider value={{state, editorDispatch}}>
            <div className=" col-span-3 bg-slate-100 h-[100vh]">
    1           <div className='w-[50%] mx-auto bg-white h-[100%] p-4'>
                    {
                        (state.body.length > 0) 
                        &&
                        state.body.map(({ name, id, content }) => {
                            const Comp = ComponentsMap['Col2'];
                            return(
                                <>

                                    if(content.length > 0) {
                                         <Comp id='123' />
                                        content.map(({ name }) => {
                                            const InnerComp = ComponentsMap['Col2'];
                                            return(
                                                <InnerComp></InnerComp>
                                            );
                                        })
                                        </Comp>
                                    }

                                    <Comp id='123' />
                                </>
                            );
                        })
                    }
                </div>
            </div> 
                <div className="col-span-1 bg-white h-[100vh] p-4">
                    <form>
                        <SpaceManager />
                        <button className='btn btn-primary'></button>
                    </form>
                </div>
            </editorContext.Provider>
        </div>
    )
}

export default Cms;