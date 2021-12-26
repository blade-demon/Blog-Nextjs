import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import MyInfo from "../../components/MyInfo/MyInfo";
import WorkHistory from "../../components/WorkHistory/WorkHistory";
import Education from "../../components/Education/Education";
import Certification from "../../components/Certification/Certification";
import myResumeCls from "./me.module.css";

export default function MyResume() {
  const { word } = myResumeCls;
  return (
    <Layout>
      <Head>
        <title>WilliamXu</title>
      </Head>
      <section className="part myInfo">
        <MyInfo />
      </section>
      <section className="part profession">
        <div className={word}>
          Stay Hungry, Stay Foolish. 求知若渴，虚心若愚。
        </div>
      </section>
      <section className="part work">
        <div className="title">Work History</div>
        <WorkHistory />
      </section>
      <section className="part education">
        <div className="title">Education</div>
        <Education />
      </section>
      <section className="part certification">
        <div className="title">证书</div>
        <Certification />
      </section>

      <section className="part accomplishments">
        <div className="title">Accomplishments</div>
        <div className="content-box">
          <div className="time">2017-07</div>
          <div className="detail">
            <div className="title"></div>
            <div className="company"></div>
            <div className="detailList">
              <p>AWS Certificated Solutions Architect - Associate</p>
            </div>
          </div>
        </div>
      </section>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
