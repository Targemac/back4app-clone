import style from "./style.module.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { data } from "./data";

const WhatMakesUsUnique = () => {
  return (
    <div className={style.container}>
      <div className={style.bigText}>What makes us unique?</div>
      <div className={style.itemGrp}>
        {data.map((item, i) => (
          <div className={style.item}>
            {item.title}{" "}
            <span className="tooltip">
              {/* {item.tooltip} */}
              <QuestionCircleOutlined />
            </span>
          </div>
        ))}
      </div>
      <div className={style.link}>
        <a href="/">Learn More</a>
      </div>
    </div>
  );
};

export default WhatMakesUsUnique;
