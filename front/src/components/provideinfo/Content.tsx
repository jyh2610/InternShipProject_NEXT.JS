import React from "react";
interface ContentProps {
  label: string;
  provideTitle: string;
  provideText: string;
  // If you have additional props, you can add them here
  // For example: additionalProp: SomeType;
}

const Content: React.FC<ContentProps> = ({ provideTitle, provideText }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 p-8 px-9">
        <p className="font-extrabold my-4">{provideTitle}</p>
        <div dangerouslySetInnerHTML={{ __html: provideText }} />
        <br />
      </div>
    </div>
  );
};

export default Content;
