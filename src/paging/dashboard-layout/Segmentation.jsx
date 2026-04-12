import React from 'react'

const Segmentation = ({Image}) => {
  return (
    <div className="p-5 w-[40%] " >
        <h2>Customer Segmentation</h2>
        <img className='p-6 w-[100%]' src={Image} alt="" />
        <div>
            <div className='flex gap-3 items-center'><div className='w-4 bg-blue-400 border h-4'></div><div>Closed</div></div>
            <div className='flex gap-3 items-center'><div className='w-4 bg-gray-500 border h-4'></div><div>Prospect</div></div>
            <div className='flex gap-3 items-center'><div className='w-4 bg-sky-200 border h-4'></div><div>Lead</div></div>
        </div>
    </div>
  )
}

export default Segmentation