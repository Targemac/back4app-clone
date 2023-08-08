import style from "./style.module.css";
import { CaretUpOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <a href="/">bac4App-Clone</a>
      </div>

      <div className={style.nav_group}>
        <div className={style.nav_item}>
          <div className={style.label}>
            Products
            <span className={style.icon}>
              {" "}
              <CaretUpOutlined />
            </span>
          </div>
          <div className={style.body}>
            <div className={style.head}>Products</div>
            <div className={style.body_groups}>
              <div className={style.group}>
                <div className={style.group_title}>Backend as a Service</div>
                <div className={style.group_body}>
                  Out-of-the-box real-time database, cloud functions,
                  authentication, APIs (REST/GraphQL), Notifications, and
                  Blockchain features.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to backend</a>
                </div>
              </div>
              <div className={style.group}>
                <div className={style.group_title}>Container as a Service</div>
                <div className={style.group_body}>
                  Deploy your application from a Git repo, monitor with real
                  time metrics and logs, and scale to deliver the best user
                  experience.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to containers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.nav_item}>
          <div className={style.label}>
            Pricing
            <span className={style.icon}>
              {" "}
              <CaretUpOutlined />
            </span>
          </div>
          <div className={style.body}>
            <div className={style.head}>Products</div>
            <div className={style.body_groups}>
              <div className={style.group}>
                <div className={style.group_title}>Backend as a Service</div>
                <div className={style.group_body}>
                  Out-of-the-box real-time database, cloud functions,
                  authentication, APIs (REST/GraphQL), Notifications, and
                  Blockchain features.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to backend</a>
                </div>
              </div>
              <div className={style.group}>
                <div className={style.group_title}>Container as a Service</div>
                <div className={style.group_body}>
                  Deploy your application from a Git repo, monitor with real
                  time metrics and logs, and scale to deliver the best user
                  experience.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to containers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.nav_item}>
          <div className={style.label}>
            Docs
            <span className={style.icon}>
              {" "}
              <CaretUpOutlined />
            </span>
          </div>
          <div className={style.body}>
            <div className={style.head}>Products</div>
            <div className={style.body_groups}>
              <div className={style.group}>
                <div className={style.group_title}>Backend as a Service</div>
                <div className={style.group_body}>
                  Out-of-the-box real-time database, cloud functions,
                  authentication, APIs (REST/GraphQL), Notifications, and
                  Blockchain features.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to backend</a>
                </div>
              </div>
              <div className={style.group}>
                <div className={style.group_title}>Container as a Service</div>
                <div className={style.group_body}>
                  Deploy your application from a Git repo, monitor with real
                  time metrics and logs, and scale to deliver the best user
                  experience.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to containers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.nav_item}>
          <div className={style.label}>
            Support
            <span className={style.icon}>
              {" "}
              <CaretUpOutlined />
            </span>
          </div>
          <div className={style.body}>
            <div className={style.head}>Products</div>
            <div className={style.body_groups}>
              <div className={style.group}>
                <div className={style.group_title}>Backend as a Service</div>
                <div className={style.group_body}>
                  Out-of-the-box real-time database, cloud functions,
                  authentication, APIs (REST/GraphQL), Notifications, and
                  Blockchain features.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to backend</a>
                </div>
              </div>
              <div className={style.group}>
                <div className={style.group_title}>Container as a Service</div>
                <div className={style.group_body}>
                  Deploy your application from a Git repo, monitor with real
                  time metrics and logs, and scale to deliver the best user
                  experience.
                </div>
                <div className={style.group_foot}>
                  <a href="/">Go to containers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.action_group}>
        <button className={style.login_btn}>Login</button>
        <button className={style.signup_btn}>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
