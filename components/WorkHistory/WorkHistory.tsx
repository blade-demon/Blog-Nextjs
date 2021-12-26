import React from "react";
import styles from "./WorkHistory.module.css";

const list = [
  {
    time: "2019.04-current",
    main: "Senior Web Developer",
    locate: "Lufax Holding Ltd, Shanghai, Shanghai",
    listItem: [
      "平安银行一户通项目。承担用户投资前准备流程开发，支持前台业务线接入达成用户一户通开户流程，项目时间紧，测试联调环境差，数据紧缺，历史遗留问题多，涉及开发方多等不利因素，按时上线。20年累计新增一户通用户数量80w +，完成公司以及集团年度KPI考核目标。",
      "陆控壹钱包融合项目。在项目中将登录注册流程组件化，节约了微信以及营销前台业务线开发成本，在不降低安全风险的前提下，提升了业务营销转化率以及用户体验。",
      "陆基金登录后置项目。利用陆金所前端框架中现有的H5和客户端的登录机制以及相关Task，实现用户在未登录前提下可先浏览产品页面，并在登录成功后继续投资流程的需求，基金单品页的PV增长了80%，投资转化率也有了10%的提升。",
      "平安产险外输货架项目。作为主开发，和产品经理一起在满足合规基础上，设计项目联登方案，协调陆金所内部前台业务线前后端同事完成开发，追踪测试反馈问题，协助项目经理组织协调对应人员解决重难点问题，以及上线前的各项准备工作，保证了项目的按时上线。",
      "在团队内作为用户域负责人，带领小组成员完成需求分解，任务分配，方案输出，CodeReview，疑难答疑，异常巡检等日常工作。",
    ],
  },
  {
    time: "2015.08 ~ 2019.04",
    main: "Web Developer",
    locate: "Gamepoch, Shanghai, Shanghai",
    listItem: [
      "从零搭建公司前端开发脚手架工具搭配Jenkins工具构建CI/CD工作流。使用Gulp, Babel, Webpack等前端构建工具结合Jenkins，极大提高前端开发工程师的开发以及发布效率。",
      "承担了公司官网的开发以及优化，并且综合利用各种前后端的技术（包括且不仅限于：页面图片懒加载，组件懒加载，Nginx层http2等配置），在此过程中利用Webpagetest, Lighthouse进行网页优化结果审计, 网页首屏加载时间降低至1.5秒。",
      "使用Wepy小程序开发框架，从零开发了公司的客服小程序，极大提升同事的工作体验， 提高公司客服以及门店运营效率，并使用Node.js、MongoDB 从零搭建公司微信公众号后台服务。",
      "实现H5和Native App之间实现JsBridge通讯，开发了基于Sony PS4 android sdk机器的Android应用，实现公司新的游戏机按时收费的商业模式落地，并在当年上海普陀区环球港的商业展览中取得好评。",
      "使用Puppeteer对主流游戏网站内容进行爬虫，获得热门游戏数据，并且通过PowerBI对数据进行清洗展示，极大丰富了公司的运营内容，以及对外的融资路演。",
    ],
  },
  {
    time: "2013.10 ~ 2015.07",
    main: "Unity Game Developer",
    locate: "Unity3D, Shanghai, Shanghai",
    listItem: [
      "参与Dead Trigger、Shadowgun等从国外引进游戏的本地化开发工作，在此期间第一次接触了解Amazon Web Services，参与了游戏服务器的本土化实践。",
      "使用React参与开发了游戏后台运营平台，提高了公司的游戏运营效率。",
    ],
  },
  {
    time: "2012.07-2013.09",
    main: "C++ Developer",
    locate: "Guang xin chang rong, Beijing, Beijing",
    listItem: ["负责公司软件系统的开发以及维护。"],
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
              {listItem.map((item, index) => {
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
