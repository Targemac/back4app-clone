import style from "./style.module.css";
import dbicon from "../../assets/dont start from scratch/server-outline.svg";
import cloudicon from "../../assets/dont start from scratch/cloudy-outline.svg";
import graphqlicon from "../../assets/dont start from scratch/graphql-svgrepo-com.svg";

const DontStartFromScratch = () => {  
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.col1}>
          <div className={style.bigText}>
            Don’t start from scratch each time you build
          </div>
          <div className={style.smallText}>
            We have everything you need to transform your backend from a job
            that takes months, to something that can be ready in weeks, even
            days.
          </div>
          <div className={style.link}>
            <a href="/" className={style.link}>
              Check out the full features list
            </a>
          </div>
        </div>

        <div className={style.col2}>
          <div className={style.item}>
            <div className={style.icon}>
              <img src={dbicon} alt="" />
            </div>
            <div className={style.details}>
              <div className={style.title}>Real-Time Database</div>
              <div className={style.body}>
                Build real-time apps by storing and querying relational data
                between your users with strong user-based security.
              </div>
              <a href="/" className={style.link}>
                Read More
              </a>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.icon}>
              <img src={cloudicon} alt="" />
            </div>
            <div className={style.details}>
              <div className={style.title}>Cloud code functions</div>
              <div className={style.body}>
                Deploy and Run server-side logic without needing to spin up your
                own servers.
              </div>
              <a href="/" className={style.link}>
                Read More
              </a>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.icon}>
              <img src={graphqlicon} alt="" />
            </div>
            <div className={style.details}>
              <div className={style.title}>APIs & SDKs</div>
              <div className={style.body}>
                Get a smooth, easy-to-use experience when you build using our
                simple APIs (GraphQL/REST) and SDKs.
              </div>
              <a href="/" className={style.link}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontStartFromScratch;
