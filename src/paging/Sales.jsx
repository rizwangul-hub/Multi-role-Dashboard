import React from 'react'
import salesbar from "../images/bar-chart (1).png"

const Sales = () => {
  return (
    <div className='w-[80%] p-4 flex flex-col gap-3 m-auto'>
        <div className='flex justify-between w-full gap-3'>
            <div className='text-3xl'>Sales Overview</div>
            <select name="" id="" className='border rounded-xl p-1 w-[100px] p-3'>
                <option value="" >month</option>
            </select>
        </div>
        <div className='w-full mt-5'>
            <img className='w-full' src={salesbar} alt="" />
        </div>
    </div>
  )
}

export default Sales