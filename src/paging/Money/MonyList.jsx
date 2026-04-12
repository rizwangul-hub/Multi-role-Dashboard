import React from 'react'

const MonyList = ({price,profit,image}) => {
  return (
    <div className='flex w-[300px] p-8  rounded-2xl gap-3 border'>
        
        <div><img src={image} alt="" /></div>
        <div>
            <div className='font-semibold'>{profit}</div>
            <div className='font-bold text-[20px]'>{price}</div>
        </div>
    </div>
  )
}

export default MonyList