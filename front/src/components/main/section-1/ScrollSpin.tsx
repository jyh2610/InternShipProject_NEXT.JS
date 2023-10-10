import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ScrollSpin = () => <Spin style={{ paddingBottom: "50px" }} indicator={antIcon} />;

export default ScrollSpin;
