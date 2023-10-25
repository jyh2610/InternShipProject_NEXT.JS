import React from "react";
interface ContentProps {
  label: string;
  provideText: string;
  // If you have additional props, you can add them here
  // For example: additionalProp: SomeType;
}

const Content: React.FC<ContentProps> = ({ provideText }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 p-8 px-9" style={{ overflowY: "scroll", height: "480px" }}>
        <div dangerouslySetInnerHTML={{ __html: provideText }} />
      </div>
    </div>
  );
};

export default Content;
