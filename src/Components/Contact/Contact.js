import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Map from "../Map/Map";


const Contact = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const resform = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aurcy1s",
        "template_y8p6r09",
        resform.current,
        "4Aox3UZg8KykIWBox"
      )
      .then(
        (result) => {
          window.location.reload(false);
          alert("Mensaje enviado correctamente!");
          console.log(result.text);
        },
        (error) => {
          window.location.reload(false);
          alert("no se pudo enviar el mensaje");
          console.error(error.text);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container contact-page">
    <Map/>
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
            <form ref={resform} onSubmit={sendEmail}>
              <ul>
                <li className="Half">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Nombre"
                    required
                  />
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
