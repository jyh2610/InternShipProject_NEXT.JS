import { format } from "path";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const NewBirth = (value, locale) => {
  const dayOfWeek = value.day();
  const customDayLabels = ["일", "월", "화", "수", "목", "금", "토"];
  return <div className="ant-picker-cell-inner">{customDayLabels[dayOfWeek]}</div>;
};

export default NewBirth;
