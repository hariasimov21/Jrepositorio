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
          <div className="contact-form">
            <form>
              <ul>
                <li className="Half">
                  <input type="text" name="Name" placeholder="Name" required />
                </li>
                <li className="Half">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Correo electrónico"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="Asunto"
                    placeholder="Asunto"
                    required
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    name="Mensaje"
                    placeholder="Mensaje"
                    required
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Contact;
