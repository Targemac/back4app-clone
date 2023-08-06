import LargeFooter from "./LargFooter/LargeFooter";
import SmallFooter from "./SmallFooter/SmallFooter";
import styles from "./footer.module.css";
import { footerData } from "./footerData";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <LargeFooter styles={styles} data={footerData} />
      <SmallFooter styles={styles} />
    </div>
  );
};

export default Footer;
