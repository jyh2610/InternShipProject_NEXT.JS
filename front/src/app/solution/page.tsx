import React from "react";

import SubHeader from "@/components/subHead/SubHeader";
import CustomTab from "@/components/CustomTab";

import "../download/style.css";

function page() {
  return (
    <div className="warp">
      <SubHeader />
      <CustomTab />
    </div>
  );
}

export default page;
