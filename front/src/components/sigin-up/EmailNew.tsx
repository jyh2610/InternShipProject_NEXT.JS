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
}: {
  confirmbtn: boolean;
  setConfirmbtn: any;
  emailformValue: string;
  emailbtn: boolean;
  setEmailbtn: any;
  setResSuccess: any;
  resSuccess: any;
}) => {
  const [isActive, setIsActive] = useState(false);
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
          setIsActive={setIsActive}
          isActive={isActive}
          setConfirmbtn={setConfirmbtn}
          confirmbtn={confirmbtn}
          emailformValue={emailformValue}
          setSeconds={setSeconds}
          Seconds={seconds}
        />
      </div>
      <div style={{ marginLeft: "4rem", marginBottom: "2rem", padding: "0.2rem 0.8rem" }}>
        {confirmbtn && (
          <EmailCode
            setConfirmbtn={setConfirmbtn}
            setIsActive={setIsActive}
            seconds={seconds}
            setSeconds={setSeconds}
            isActive={isActive}
            email={emailformValue}
            setResSuccess={setResSuccess}
            resSuccess={resSuccess}
          />
        )}
      </div>
    </>
  );
};

export default EmailNew;
