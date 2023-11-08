import dynamic from "next/dynamic";
import React, { useState } from "react";
import EmailId from "./EmailId";
import EmailDomain from "./EmailDomain";
import DomainSelect from "./DomainSelect";

const EmailCode = dynamic(() => import("./EmailCode"), { ssr: false });
const EmailAuthBtn = dynamic(() => import("./EmailAuthBtn"));

const EmailNew = ({
  setResSuccess,
  resSuccess,
  emailformValue,
  confirmbtn,
  emailbtn,
  setEmailbtn,
  setConfirmbtn,
  isActive,
  setIsActive,
}: {
  confirmbtn: boolean;
  setConfirmbtn: React.Dispatch<React.SetStateAction<boolean>>;
  emailformValue: string;
  emailbtn: boolean;
  setEmailbtn: any;
  setResSuccess: any;
  resSuccess: any;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [seconds, setSeconds] = useState(180);
  const selectHandler = () => {
    emailformValue;
  };
  return (
    <>
      <div className="flex gap-[0.3rem]">
        <EmailId />
        <span style={{ height: "100%", padding: "0.5rem 0.8rem" }}>@</span>
        <EmailDomain />
        {!confirmbtn && <DomainSelect selectHandler={selectHandler} />}
        <EmailAuthBtn
          emailbtn={emailbtn}
          setEmailbtn={setEmailbtn}
          setConfirmbtn={setConfirmbtn}
          confirmbtn={confirmbtn}
          emailformValue={emailformValue}
          setSeconds={setSeconds}
          Seconds={seconds}
        />
      </div>
      {confirmbtn && (
        <div style={{ marginLeft: "4rem", marginBottom: "1rem", padding: "0.2rem 0.8rem" }}>
          <EmailCode
            setIsActive={setIsActive}
            seconds={seconds}
            setSeconds={setSeconds}
            isActive={isActive}
            email={emailformValue}
            setResSuccess={setResSuccess}
            resSuccess={resSuccess}
          />
        </div>
      )}
    </>
  );
};

export default EmailNew;
