import React from "react";
import CustomerComp from "./../dashboard-layout/CustomerCom";
import Segmentation from "./../dashboard-layout/Segmentation";
import TeamAvailability from "./TeamAvailability";
import SimplifiedTeamAvailability from "./SimplifiedTeamAvailability";
import CustomerFeedback from "./SimplifiedTeamAvailability";
import AnalyticsDashboard from "./AnalyticsDashboard";
import CustomerMovements from "../../component/sales/CustomerMovements";

const Insight = () => {
  const userRole = localStorage.getItem("role");
  const isAdmin = userRole?.toLowerCase() === "admin";
  const segmentImage = "/image/Figpie (1).png";
  const segmentImage_2 = "/image/Figpie.png";

  return (
    <div>
      <div className="flex gap-0 p-9">
        <CustomerComp Children={"Sales Analytics"} />
        <Segmentation Image={segmentImage} />
      </div>
      <CustomerMovements />
      {isAdmin ? (
        <div>
          <div className="flex gap-1 w-[90%]">
            <TeamAvailability />
            <CustomerFeedback />
          </div>
          <div className="flex mt-7 justify-center">
            <Segmentation Image={segmentImage_2} />
            <AnalyticsDashboard />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Insight;
