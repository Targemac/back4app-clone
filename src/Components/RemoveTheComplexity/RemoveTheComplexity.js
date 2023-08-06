import style from "./style.module.css";
import video from "../../assets/product.mp4";

const RemoveTheComplexity = () => {
  return (
    <div className={style.container}>
      <div className={style.bigText}>
        Remove the complexity from the backend, without removing functionality
      </div>

      <div className={style.smallText}>
        Our simple UI, SDKs, and APIs let you spend more time on your business.
        We focus on the infrastructure, you focus on your customers.
      </div>

      <video src={video} autoPlay muted loop />
    </div>
  );
};

export default RemoveTheComplexity;
