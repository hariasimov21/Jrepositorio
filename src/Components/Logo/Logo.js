import "./Logo.scss";
import LogoP from "../../assets/images/logo-s.PNG";
import { useRef } from "react";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className="logo-container">
      <img src={LogoP} className="prinLogo" alt="Logo" />
    </div>
  );
};

export default Logo;
