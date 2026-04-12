import React from 'react'

const Item = ({item, name , price,number}) => {
  return (
    <div className='flex  items-center p-4 pl-8 w-full'>
       <div className='font-bold text-4xl '>{number}</div> 
       <div className='w-[20%]'>
            <img className='w-[100%]' src={item} alt="" />
        </div>
        <div className='flex flex-col gap-8 w-[400px]'>
            <h3 className='font-semibold text-3xl'>{name}</h3>
            <h3 className='font-semibold text-2xl'>${price}</h3>
        </div>
    </div>
  )
}

export default Item