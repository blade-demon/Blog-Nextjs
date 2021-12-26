import React from "react";
import styles from "./Education.module.css";

const list = [
  {
    time: "2008-09 ~ 2013-06",
    main: "",
    locate: "Nanjing Institute of Technology - Nanjing",
  },
];

export default function contentBox() {
  const {
    contentBox: contentBoxCls,
    time: timeCls,
    detail: detailCls,
    main: mainCls,
    locate: locateCls,
    detailList: detailListCls,
  } = styles;

  return list.map(({ time, main, locate, listItem = [] }, index) => {
    return (
      <div key={index}>
        <div className={contentBoxCls}>
          <div className={timeCls}>{time}</div>
          <div className={detailCls}>
            <div className={mainCls}>{main}</div>
            <div className={locateCls}>{locate}</div>
            <span className={detailListCls}>
              {listItem.length > 0 &&
                listItem.map((item = "", index = 0) => {
                  return (
                    <li className="itemCls" key={index}>
                      {item}
                    </li>
                  );
                })}
            </span>
          </div>
        </div>
      </div>
    );
  });
}
