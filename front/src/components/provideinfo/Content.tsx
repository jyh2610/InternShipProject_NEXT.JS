import React from "react";

const Content = ({ label, provideTitle, provideText }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 p-8 px-9">
        <p className="font-extrabold my-4">{provideTitle}</p>
        <div dangerouslySetInnerHTML={{ __html: provideText }} />
        <br />
      </div>
      {/* Add any additional components or functionality specific to this item */}
      {/* For example, you can place the Agreement component here */}
      {/* <Agreement /> */}
    </div>
  );
};

export default Content;
