import { QuestionCircleOutlined } from "@ant-design/icons";
import styles from "./help.module.css";

const Help = () => {
  return (
    <a href="/">
      <div className={styles.help}>
        <QuestionCircleOutlined />
        Help
      </div>
    </a>
  );
};

export default Help;
