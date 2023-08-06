import styles from "./styles.module.css";
import parse from "../../assets/curious/parse-svgrepo-com.svg";
import redis from "../../assets/curious/redis-logo-svgrepo-com.svg";
import docker from "../../assets/curious/docker-svgrepo-com.svg";
import graphql from "../../assets/curious/graphql-svgrepo-com.svg";
import nodejs from "../../assets/curious/nodejs-icon-svgrepo-com.svg";

const UnderTheHood = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigText}>Curious about what’s under the hood?</div>
      <div className={styles.smallText}>
        Back4App is a combination of open-source tools. Our backend platform was
        built using enterprise-grade, open-source products like:
      </div>
      <div className={styles.icons}>
        <a href="/" className={styles.icon}>
          <img src={parse} alt="" />
          Parse Platform
        </a>
        <a href="/" className={styles.icon}>
          <img src={redis} alt="" />
          Redis
        </a>
        <a href="/" className={styles.icon}>
          <img src={docker} alt="" />
          Docker
        </a>
        <a href="/" className={styles.icon}>
          <img src={graphql} alt="" />
          GraphQl
        </a>
        <a href="/" className={styles.icon}>
          <img src={nodejs} alt="" />
          NodeJS
        </a>
      </div>
    </div>
  );
};

export default UnderTheHood;
