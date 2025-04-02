import styles from "./login.module.scss";
import logo from "../../assets/logo.svg";
import pic from "../../assets/sign-in-pic.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <img src={logo} alt="lendsqr logo" />
        <img className={styles.pic} src={pic} alt="landing picture" />
      </section>
      <section className={styles.body}>
        <img src={logo} alt="lendsqr logo" />
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <br />
        <form className={styles.form}>
          <div className={styles.gap}>
            <input className={styles.loginInput} placeholder="Email" />
            <div className={styles.loginInput}>
              <input placeholder="Password" />
              <button className={styles.showBtn}>Show</button>
            </div>
            <button className="textBtn">Forgot Password?</button>
          </div>
          <br />
          <button
            className={styles.loginBtn}
            onClick={() => navigate("/dashboard")}
          >
            Log in
          </button>
        </form>
      </section>
    </div>
  );
}
