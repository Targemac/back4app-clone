import styles from "./styles.module.css";

const StartBuildingNow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigText}>
        Ready to focus on the frontend to create exceptional experiences for
        your users?
      </div>
      <div className={styles.smallText}>
        Join over 190K developers who use Back4App to build faster, focus more
        on the user experience, and save money. To find out more, contact us
        today.
      </div>
      <button className={styles.startBtn}>Start Building Now!</button>
    </div>
  );
};

export default StartBuildingNow;
