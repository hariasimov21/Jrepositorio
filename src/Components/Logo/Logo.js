import "./Logo.scss";
//import LogoP from "../../assets/images/logo-s.png";
import LogoP from "../../assets/images/logo-s.PNG";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoP} className="prinLogo" alt="Logo" />
    </div>
  );
};

export default Logo;
