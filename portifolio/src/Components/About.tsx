import "./About.css";

const About = () => {
  return (
    <div className="container-about">
      <h1>Sobre mim</h1>
      <div className="container-line">
        <div className="line"></div>
        <div className="oline"></div>
      </div>
      <div className="content-about">
        Sou um desenvolvedor Front End e gosto muito de programação, estou a
        procura de me especializar ainda mais na área e mostrar minhas
        habilidades utilizando as tecnologias <b>HTML, CSS, javascript.</b>
      </div>

      <a
        href="https://drive.google.com/file/d/1NGxPllCM_TiLnH6-QVMSWTWIO0-DcyQy/view?usp=drive_link"
        target="_blank"
        className="btn-cv"
      >
        <b>Meu CV</b>
      </a>
    </div>
  );
};

export default About;
