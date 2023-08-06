import {
  GithubOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const SmallFooter = ({ styles }) => {
  return (
    <div className={styles.smallFooter}>
      <div className={styles.copyright}>&copy; 2022 Back4App Inc.</div>

      <div className={styles.address}>
        Made with code and coffee at 440 N Wolfe Road, Sunnyvale, CA
      </div>

      <div className={styles.socials}>
        <a href="/">
          <GithubOutlined />
        </a>
        <a href="/">
          <FacebookOutlined />
        </a>
        <a href="/">
          <TwitterOutlined />
        </a>
        <a href="/">
          <YoutubeOutlined />
        </a>
      </div>
    </div>
  );
};

export default SmallFooter;
