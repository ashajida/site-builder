'use client'

import React, { useContext, useState } from 'react'
import SpaceManager from '../components/SpaceManager';
import Col2 from '../components/Col2';
import { sidebarContext, selectedComponentContext } from '../context/context';
import { useRouter } from 'next/navigation';




const Cms = () => {


  return (
    <div className='grid grid-cols-4'>
        <sidebarContext.Provider value={{settings, setSettings}}>
            <selectedComponentContext.Provider value={{selectedComponent, setSelectedComponent}}>
        <div className=" col-span-3 bg-slate-100 h-[100vh]">
1           <div className='w-[50%] mx-auto bg-white h-[100%] p-4'>
                <Col2 id={`1`} test={settings[0].margin.top!} />
            </div>
        </div> 
            <div className="col-span-1 bg-white h-[100vh] p-4">
                <form>
                    <SpaceManager />
                    <button className='btn btn-primary'></button>
                </form>
            </div>
            </selectedComponentContext.Provider>
        </sidebarContext.Provider>
    </div>
  )
}

export default Cms;