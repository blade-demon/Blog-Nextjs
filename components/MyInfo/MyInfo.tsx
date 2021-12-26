import React from "react";
import myInfoCls from "./MyInfo.module.css";

function MyInfo() {
  const { name, occupation } = myInfoCls;
  return (
    <div>
      <div className={name}>Xuziwei111</div>
      <div className={occupation}>Frontend Web Developer</div>
      <div className="address">上海市浦东新区源深路1088号平安财富大厦</div>
      <div className="phone">18616345128</div>
      <div className="email">xuziwei89@gmail.com</div>
      <div className="www">https://github.com/blade-demon</div>
    </div>
  );
}

export default MyInfo;
