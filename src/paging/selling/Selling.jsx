import React from 'react'
import Item from './Item'
import item_1 from "../../images/Rectangle 3.png"
import item_2 from "../../images/Rectangle 3 (1).png"
import item_3 from "../../images/Rectangle 3 (2).png"
import item_4 from "../../images/Rectangle 3 (3).png"

const Selling = () => {
  return (
    <div className='bg-white p-5 w-[75%]'>
      <h2 className='font-semibold mb-4'>Top Sellig Product</h2>
      <div className='w-full flex
       flex-wrap gap-4'>
        <Item number={1} item={item_1} price={113} name={"Dell XPS 13 9310-70234076"}/>
        <Item number={2} item={item_2} price={798} name={"ASUS ROG STRIX SCAR 15 G533QR-HQ081T"}/>
        <Item number={3} item={item_3} price={342} name={"ACER Nitro 5 AN515-45-R9SC"}/>
        <Item number={4} item={item_4} price={976} name={"MacBook Air 2020 MVH42SA/A"}/>
      </div>
    </div>
  )
}

export default Selling