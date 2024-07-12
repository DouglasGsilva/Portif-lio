import "./Banner.css";
import imgDouglas from "../img/foto-final-portifolio.png";

const Banner = () => {
  return (
    <>
      <div className="container-banner">
        <img id="imgDG" src={imgDouglas} alt="" />
        <div className="nome">Douglas Gonçalo</div>
        <div className="funcao">Desenvolvedor Front End</div>
      </div>
      ;
    </>
  );
};

export default Banner;
