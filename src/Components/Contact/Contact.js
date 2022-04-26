import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
import { useEffect, useState } from "react";

const Contact = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", "a", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto repellat eum fuga rem distinctio animi saepe optio. Natus
            eos quam doloribus rerum nemo minus consequuntur vitae porro modi
            aliquid?
          </p>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Contact;
