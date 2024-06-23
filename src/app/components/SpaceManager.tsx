'use client'

import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { selectedComponentContext, sidebarContext } from '../context/context'

type State = {
    margin: Margin,
    padding: Padding,
    border: Border
}

const SpaceManager = () => {

  const [marginState, setMargin] = useState<Margin>({
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  });

  const [paddingState, setPadding] = useState<Margin>({
    top: '',
    left: '',
    right: '',
    bottom: ''
  });

  const [borderState, setBorder] = useState<Margin>({
    top: '',
    left: '',
    right: '',
    bottom: ''
  });

  const {settings, setSettings} = useContext(sidebarContext);
  const {selectedComponent, setSelectedComponent} = useContext(selectedComponentContext);

  useEffect(() => {

    if(!selectedComponent) return;
    console.log(selectedComponent);
  
    const result = settings.find((item) => item.id == selectedComponent )

    if(result) {
      setMargin(result?.margin!);
    }
    
    return () => {
        setMargin({
          top: '0',
          left: '0',
          right: '0',
          bottom: '0'
        })
    }
  }, [setMargin, selectedComponent, settings]);


  const handleMarginInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const result = settings.map((item: ComponentSettings) => item.id == selectedComponent ? { ...item,  [input.name] : input?.value } : item  );
    setSettings(result);
  }

  const handlePaddingInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const input = e.target;
    setPadding({ ...paddingState, [input.name] : input?.value} );
  }

  const handleBorderInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const input = e.target;
    setBorder({ ...borderState, [input.name] : input?.value} );
  }


  return (
    <div className='space-manager'>
        <div className='border h-[300px] w-[90%] flex flex-col justify-center mx-auto cursor-pointer p-10 relative'>
            <input onChange={handleMarginInput}  value={marginState.top} name='top' className='w-[30px] h-[30px] border block p-1 absolute top-1 left-[50%] translate-x-[-50%]'/>
            <input onChange={handleMarginInput}   value={marginState.left} name='left' className='w-[30px] h-[30px] border block p-1 absolute top-50 left-1 translate-y-[-50%]'/>
            <input onChange={handleMarginInput}   value={marginState.right} name='right' className='w-[30px] h-[30px] border block p-1 absolute top-50 right-1 translate-y-[-50%]'/>
            <input onChange={handleMarginInput}   value={marginState.bottom} name='bottom' className='w-[30px] h-[30px] border block p-1 absolute bottom-1 left-[50%] translate-x-[-50%]'/>
            <div className='border h-[200px] w-[90%] flex flex-col justify-center mx-auto cursor-pointer p-10 relative'>
                <input onChange={handlePaddingInput} value={paddingState.top} name='top' className='w-[30px] h-[30px] border block p-1 absolute top-1 left-[50%] translate-x-[-50%]'/>
                <input onChange={handlePaddingInput} value={paddingState.left} name='left' className='w-[30px] h-[30px] border block p-1 absolute top-50 left-1 translate-y-[-50%]'/>
                <input onChange={handlePaddingInput} value={paddingState.right} name='right' className='w-[30px] h-[30px] border block p-1 absolute top-50 right-1 translate-y-[-50%]'/>
                <input onChange={handlePaddingInput} value={paddingState.bottom} name='bottom' className='w-[30px] h-[30px] border block p-1 absolute bottom-1 left-[50%] translate-x-[-50%]'/>
                <div className='border h-[300px] w-[90%] flex flex-col justify-center mx-auto cursor-pointer p-10 relative'>
                    <input onChange={handleBorderInput} value={borderState.top} name='top' className='w-[30px] h-[30px] border block p-1 absolute top-1 left-[50%] translate-x-[-50%]'/>
                    <input onChange={handleBorderInput} value={borderState.left} name='left' className='w-[30px] h-[30px] border block p-1 absolute top-50 left-1 translate-y-[-50%]'/>
                    <input onChange={handleBorderInput} value={borderState.right} name='right' className='w-[30px] h-[30px] border block p-1 absolute top-50 right-1 translate-y-[-50%]'/>
                    <input onChange={handleBorderInput} value={borderState.bottom} name='bottom' className='w-[30px] h-[30px] border block p-1 absolute bottom-1 left-[50%] translate-x-[-50%]'/>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default SpaceManager


{/* <div className='border w-[100%] h-[100%] mx-auto flex flex-col justify-center bg-white cursor-pointer p-10'>
<div className='border  w-[100%] h-[100%] mx-auto bg-white cursor-pointer p-10'>

</div>
</div> */}