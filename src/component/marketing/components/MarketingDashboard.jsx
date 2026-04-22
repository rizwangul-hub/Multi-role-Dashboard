import React from 'react'
import Segment from "../../../../public/image/Figpie.png";
import CustomerComp from '../../../paging/dashboard-layout/CustomerCom';
import Segmentation from '../../../paging/dashboard-layout/Segmentation';
import AnalyticsDashboard from '../../../paging/insight/AnalyticsDashboard';
import TeamAvailability from '../../../paging/insight/TeamAvailability';

const MarketingDashboard = () => {
  return (
    <div>
        <div className="flex gap-0 p-9">
        {" "}
        <CustomerComp Children={"Sales History"} />
        <Segmentation Image={Segment} />
      </div>
           <div className="flex gap-1 w-[90%]">
        <TeamAvailability />
        <AnalyticsDashboard/>

      </div>
    </div>
  )
}

export default MarketingDashboard