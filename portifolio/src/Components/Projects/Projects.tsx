import "./Projects.css";
import CardsProject from "./CardsProject";
import video from "../../img/video-projeto/Video-Site.mp4";
const Projects = () => {
  return (
    <div className="container-projects">
      <h1 className="title-projct">Projetos</h1>
      <CardsProject
        video={video}
        title="Landing Page Barbearia"
        description="landing page para uma barbeiraria da minha cidade"
        icon="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        icon2="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        icon3="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
        icon4="	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
        icon5="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
        alt=""
        hrefDeploy=""
        hrefGithub="https://github.com/DouglasGsilva/Site-Barbearia"
      />
      <CardsProject
        video=""
        title="House Custos"
        description="Site de administração de custos para uma casa"
        icon="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        icon2="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        icon3="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
        icon4="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
        icon5="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
        hrefDeploy=""
        hrefGithub=""
        alt=""
      />
    </div>
  );
};

export default Projects;
