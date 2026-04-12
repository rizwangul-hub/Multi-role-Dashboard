import React from "react";
import CustomerComp from "./../dashboard-layout/CustomerCom";
import Segmentation from "./../dashboard-layout/Segmentation";
import TeamAvailability from "./TeamAvailability";
import SimplifiedTeamAvailability from "./SimplifiedTeamAvailability";
import CustomerFeedback from "./SimplifiedTeamAvailability";
import AnalyticsDashboard from "./AnalyticsDashboard";

const Insight = () => {
  const segmentImage = "/image/Figpie (1).png";
  const segmentImage_2 = "/image/Figpie.png";

  return (
    <div>
      <div className="flex gap-0 p-9">
        <CustomerComp Children={"Sales Analytics"} />
        <Segmentation Image={segmentImage} />
      </div>
      <div className="flex gap-1 w-[90%]">
        <TeamAvailability />
        <CustomerFeedback/>
      </div>
      <div className="flex mt-7 justify-center">
        <Segmentation Image={segmentImage_2}/>
        <AnalyticsDashboard/>
      </div>
    </div>
  );
};

export default Insight;
