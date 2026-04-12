import React from 'react'

import MonyList from "./MonyList";
import icon_1 from "../../../public/icons/c.png";
import icon_2 from "../../../public/icons/d.png";
import icon_3 from "../../../public/icons/b.png";
import icon_4 from "../../../public/icons/a.png";

const Mony = () => {
  return (
    <div>
    <div className="flex gap-6 p-4 justify-around">
      <MonyList
        price={"4 hours"}
        profit={"AVR. RESPONSE TIME"}
        image={icon_1}
      />
      <MonyList price={20} profit={"ASSIGNED TASKS"} image={icon_2} />
      <MonyList price={"85%"} profit={"CUSTOMER SATISFACTION"} image={icon_3} />
      <MonyList price={3} profit={"CHANNELS"} image={icon_4} />
    </div>
    </div>
  )
}

export default Mony