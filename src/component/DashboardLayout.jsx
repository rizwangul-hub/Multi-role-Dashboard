import React from "react";
import CustomerComp from "../paging/dashboard-layout/CustomerCom";
import Segmentation from "../paging/dashboard-layout/Segmentation";
import Tables from "../paging/dashboard-layout/small-component/Tables";
import Segment from "../../public/image/Figpie.png";


const DashboardLayout = () => {
  return (
    <div className="overflow-auto h-[80vh] p-9 ">
      {/* <SignIn/> */}
      {/* <div className="w-100% flex flex-col text-center h-[70vh] justify-center items-center gap-9">
        <h1 className="text-6xl">Welcome To My React First Project</h1>
        <p className="text-2xl w-[60%]">
          This is the first project of my react jurny which i make form figma
          disgn which i learn a lot of thing. So if you need any type of website
          then I will help you{" "}
        </p>
        <button className="border rounded-2xl p-4 bg-blue-500 text-white hover:bg-blue-700 text-2xl font-bold">
          Contact Me
        </button>
      </div> */}
      <div>
        <div className="flex gap-0 p-9">
          {" "}
          <CustomerComp Children={"Sales History"}/>
          <Segmentation Image={Segment} />

        </div>
        <Tables />
        {/* <CustomerTable/> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
