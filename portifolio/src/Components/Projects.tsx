import "./Projects.css";
import videoProjeto1 from "../img/video-projeto/Video-Site.mp4";
const Projects = () => {
  return (
    <div className="container-projects">
      <h1 className="title-projct">Projetos</h1>
      <div className="project-card">
        <video className="videoprjt1">
          <source src={videoProjeto1} />
        </video>
        <h3 id="titulo">Landing page Denis Barbeiro</h3>
        <p id="description">
          projeto de landing page para uma barbearia com login e agendamento
        </p>
        <div className="icons-project">
          <img
            id="icon-lg"
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="html"
          />
          <img
            id="icon-lg"
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            alt="js"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            alt="js"
          />
        </div>
        <div className="icons-backend-project">
          <img
            id="icon-lg"
            src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
            alt="node"
          />
          <img
            id="icon-lg"
            src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="mongo"
          />
        </div>
        <div className="container-btns">
          <a href="">
            <button className="botao-style">
              <h3>Deploy</h3>
            </button>
          </a>
          <a href="">
            <button className="botao-style">Github</button>
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src="" alt="" />
        <h3>Nome do projeto</h3>
        <p>Descrição do projeto</p>
        <div>Tecnologia usada:</div>
      </div>
    </div>
  );
};

export default Projects;
