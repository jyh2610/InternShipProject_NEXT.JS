import React from "react";
import dynamic from "next/dynamic";

import "./style.css";

const CompleteForm = dynamic(() => import("@/components/sigin-up/CompleteForm"));
function Complete() {
  return <CompleteForm />;
}

export default Complete;
