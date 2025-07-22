import "./Skills.css";
import html from "../img/linguagens/html.png";
import css from "../img/linguagens/css.png";

import react from "../img/linguagens/react.png";
import tailwind from "../img/linguagens/Tailwind.png";
import typescript from "../img/linguagens/typescript.png";
const Skills = () => {
  return (
    <>
      <h1 id="title-skills">Tecnologias</h1>
      <div className="container-line">
        <div className="oline"></div>
        <div className="line"></div>
      </div>
      <div className="container-skills">
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
          target="_blank"
        >
          <img id="skill-size-html" src={html} alt="HTML5" />
        </a>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          target="_blank"
        >
          <img id="skill-size-css" src={css} alt="CSS" />
        </a>
         <a href="https://www.typescriptlang.org/" target="_blank">
          <img id="skill-size-typescript" src={typescript} alt="ANGULAR" />
        </a>
        <a href="https://react.dev/" target="_blank">
          <img id="skill-size-react" src={react} alt="REACT" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img id="skill-size-tailwind" src={tailwind} alt="TAILWIND" />
        </a>
       
      </div>
    </>
  );
};

export default Skills;
