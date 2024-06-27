import React from 'react'

const Widgets = () => {


    const drag = (e: Event) => {
        e.dataTransfer.setData('text', e.target.id);
    }


  return (
    <div className='flex gap-2'>
        <div id="Col2" className='cursor-pointer border rounded-md flex flex-col justify-center w-[100px] h-[100px] bg-slate-50'  draggable="true" onDragStart={drag}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="mx-auto bi bi-layout-split" viewBox="0 0 16 16">
              <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5z"/>
            </svg>
        </div>
        <div id="Col2" className='cursor-pointer border rounded-md flex flex-col justify-center w-[100px] h-[100px] bg-slate-50'  draggable="true" onDragStart={drag}>
        <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className="mx-auto bi bi-layout-three-columns" viewBox="0 0 16 16">
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z"/>
</svg>
        </div>
        <div id="Text" className='cursor-pointer border rounded-md flex flex-col justify-center w-[100px] h-[100px] bg-slate-50'  draggable="true" onDragStart={drag}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="mx-auto bi bi-type" viewBox="0 0 16 16">
  <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081zm2.7-7.923L6.34 9.314H3.51l1.4-4.156zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525"/>
</svg>
        </div>
    </div>
  )
}

export default Widgets