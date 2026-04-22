import React from "react";
import Segmentation from "../../../paging/dashboard-layout/Segmentation";
import CustomerComp from "../../../paging/dashboard-layout/CustomerCom";
import Segment from "../../../../public/image/Figpie.png";
import TeamAvailability from "../../../paging/insight/TeamAvailability";
import CustomerFeedback from "../../../paging/insight/SimplifiedTeamAvailability";

const CustomerDashboard = () => {
  return (
    <div>
      <div className="flex gap-0 p-9">
        {" "}
        <CustomerComp Children={"Sales History"} />
        <Segmentation Image={Segment} />
      </div>
           <div className="flex gap-1 w-[90%]">
        <TeamAvailability />
        <CustomerFeedback/>
      </div>
    </div>
  );
};

export default CustomerDashboard;
