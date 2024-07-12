import "./Skills.css";
import html from "../img/linguagens/html.png";
import css from "../img/linguagens/css.png";
import js from "../img/linguagens/js.png";
import react from "../img/linguagens/react.png";
import tailwind from "../img/linguagens/Tailwind.png";
import angular from "../img/linguagens/angular.png";
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
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction"
          target="_blank"
        >
          <img id="skill-size-js" src={js} alt="JS" />
        </a>
        <a href="https://react.dev/" target="_blank">
          <img id="skill-size-react" src={react} alt="REACT" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img id="skill-size-tailwind" src={tailwind} alt="TAILWIND" />
        </a>
        <a href="https://angular.dev/overview" target="_blank">
          <img id="skill-size-angular" src={angular} alt="ANGULAR" />
        </a>
      </div>
    </>
  );
};

export default Skills;
