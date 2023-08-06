import style from "./style.module.css";
import { GithubOutlined } from "@ant-design/icons";

import { data } from "./data.js";

const AppsYouCanBuild = () => {
  return (
    <div className={style.container}>
      <div className={style.bigText}>Apps you can build with Back4App</div>
      <div className={style.smallText}>
        There are no limits to what you can build with Back4App. We have lots of
        start kits and examples to take inspiration from.
      </div>
      <div className={style.itemGrp}>
        {data.map((item) => (
          <div className={style.item}>
            <div className={style.title}>{item.title}</div>
            <div className={style.body}>{item.body}</div>
            <a href={`${item.url}`} className={style.url}>
              <GithubOutlined /> View Code
            </a>
          </div>
        ))}
      </div>
      <div className={style.btnGrp}>
        <a href="/" className={style.btn}>
          <GithubOutlined /> View more on GitHub
        </a>
      </div>
    </div>
  );
};

export default AppsYouCanBuild;
