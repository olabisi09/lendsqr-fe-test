import "./login.scss";
import logo from "../../assets/logo.svg";
import pic from "../../assets/sign-in-pic.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <section className="banner">
        <img src={logo} alt="lendsqr logo" />
        <img className="pic" src={pic} alt="landing picture" />
      </section>
      <section className="body">
        <img src={logo} alt="lendsqr logo" />
        <h1>Welcome!</h1>
        <p className="description">Enter details to login.</p>
        <br />
        <form className="form">
          <div className="gap">
            <input className="login-input" placeholder="Email" />
            <div className="password-input">
              <input placeholder="Password" />
              <button type="button" className="show-btn">
                Show
              </button>
            </div>
            <button className="text-btn">Forgot Password?</button>
          </div>
          <br />
          <button className="login-btn" onClick={() => navigate("/users")}>
            Log in
          </button>
        </form>
      </section>
    </div>
  );
}
