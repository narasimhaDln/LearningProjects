import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>About US</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
