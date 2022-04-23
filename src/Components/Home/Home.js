import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["J", "a", "i", "m", "e"];
  const jobArray = [
    "d",
    "e",
    "s",
    "a",
    "r",
    "r",
    "o",
    "l",
    "l",
    "a",
    "d",
    "o",
    "r",
    " ",
    "w",
    "e",
    "b",
  ];

  try {
    useEffect(() => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>o</span>
          <span className={`${letterClass} _13`}>l</span>
          <span className={`${letterClass} _14`}>a</span>
          <br />
          <span className={`${letterClass} _15`}>S</span>
          <span className={`${letterClass} _16`}>o</span>
          <span className={`${letterClass} _17`}>y</span>
          <span className={`${letterClass} _18`}> </span>

          <img src={LogoTitle} alt="desarrollador"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={19}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={24}
          />
        </h1>
        <h2> Desarrollador Front-end / Junior</h2>
        <Link to="/contact" className="flat-button">
          Contáctame
        </Link>
      </div>
    </div>
  );
};

export default Home;
