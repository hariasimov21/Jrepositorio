import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";
import {useEffect, useState} from 'react';



const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 4000);
      }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={[
              "A",
              "c",
              "e",
              "r",
              "c",
              "a",
              " ",
              "d",
              "e",
              " ",
              "m",
              "i",
            ]}
            idx={15}
          />
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          delectus cum alias non reiciendis explicabo, ipsum sit iste beatae
          quae quibusdam perferendis laborum repellendus nam, atque ipsa rerum
          quidem voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          reprehenderit excepturi rerum ipsum repellat culpa tempora pariatur
          error corrupti repudiandae exercitationem odit libero, harum soluta
          consequatur modi veritatis maiores. Natus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia
          ut officiis quae nesciunt nihil ab porro magnam sed totam eligendi,
          provident necessitatibus, impedit esse quidem est rerum, architecto
          quaerat.
        </p>
      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
              <div className="face1">
                  
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
