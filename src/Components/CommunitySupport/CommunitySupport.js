import style from "./style.module.css";

import slack from "../../assets/slack-full.svg";
import stackoverflow from "../../assets/stackoverflow-full.svg";
import parse from "../../assets/parse-full.svg";
import youtube from "../../assets/yt-full.svg";

const CommunitySupport = () => {
  return (
    <div className={style.container}>
      <div className={style.hold}>
        <div className={style.col1}>
          <div className={style.bigText}>
            Community support that builds you up (while you build your app)
          </div>
          <div className={style.smallText}>
            We know the importance of community when building apps. We make it
            easy to connect to our community so you can master new skills, get
            answers, or just talk to other developers.
          </div>
        </div>
        <div className={style.col2}>
          <a href="/">
            <img src={slack} alt="" />
          </a>
          <a href="/">
            <img src={stackoverflow} alt="" />
          </a>
          <a href="/">
            <img src={parse} alt="" />
          </a>
          <a href="/">
            <img src={youtube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;
