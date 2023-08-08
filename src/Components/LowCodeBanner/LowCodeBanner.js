import style from "./style.module.css";
import {
  PlaySquareOutlined,
  GoogleOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const LowCodeBanner = () => {
  const statistics = [
    {
      figure: "3.5B/Mo",
      desc: "Processed Requests",
    },
    {
      figure: "100",
      desc: "Countries Served",
    },
    {
      figure: "190k",
      desc: "Developers",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.bigCol}>
          <div className={style.bigText}>
            Low-code backend to build modern apps
          </div>

          <div className={style.smallText}>
            Store and query relational data on the cloud. Make it accessible
            over GraphQL and REST with a scalable, open-source backend.
          </div>

          <div className={style.link}>
            <a href="/">
              <PlaySquareOutlined /> How it works
            </a>
          </div>

          <div className={style.stat_outter}>
            <div className={style.stat_title}>Based on the Parse Platform.</div>
            <div className={style.statistics}>
              {statistics.map((item) => (
                <div className={style.item}>
                  <div className={style.figure}>
                    <span className={style.plus}>+</span>
                    {item.figure}
                  </div>
                  <div className={style.description}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={style.smallCol}>
          <div className={style.grp1}>
            <div className={style.text1}>Build your app backend in minutes</div>
            <div className={style.text2}>No credit card required</div>
          </div>

          <div className={style.grp2}>
            <button>
              <GoogleOutlined /> Sign up with Google
            </button>
            <button>
              <GithubOutlined /> Sign up with GitHub
            </button>
          </div>

          <div className={style.grp3}>
            <div className={style.numb}>or</div>
          </div>

          <form action="" method="post">
            <div className={style.grp4}>
              <input type="email" className="input_grp" placeholder="E-mail" />
              <input
                type="password"
                className="input_grp"
                placeholder="Password"
              />
              <button>Sign up with e-mail</button>
              <div className={style.legal_statement}>
                By signing up you agree to our <a href="/">Terms of Service</a>{" "}
                and <a href="/">Privacy Policy</a>.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LowCodeBanner;
