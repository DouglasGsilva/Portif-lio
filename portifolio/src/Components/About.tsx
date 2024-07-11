import "./About.css";

const About = () => {
  return (
    <div className="container-about">
      <h1>Sobre mim</h1>
      <div className="content-about">
        Sou um desenvolvedor Front End e gosto muito de programação, estou a
        procura de me especializar ainda mais na área e mostrar minhas
        habilidades utilizando as tecnologias <b>HTML, CSS, javascript.</b>
      </div>
      <button className="btn-cv">
        <h3>Meu CV</h3>
      </button>
    </div>
  );
};

export default About;
