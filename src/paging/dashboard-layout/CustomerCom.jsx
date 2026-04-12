import React, { Children } from 'react'
import salesbar from "../../images/1.png"

const CustomerComp = ({Children}) => {
  return (
    <div className='w-[60%] p-4 flex flex-col gap-3'>
            <div className='flex justify-between w-full gap-3'>
                <div className='text-3xl'>{Children}</div>
                <select name="" id="" className='rounded-xl p-1 w-[150px] p-3'>
                    <option value="" >Last 2 weeks</option>
                </select>
            </div>
            <div className='w-full mt-5'>
                <img className='w-full' src={salesbar} alt="" />
            </div>
        </div>
    
  )
}

export default CustomerComp