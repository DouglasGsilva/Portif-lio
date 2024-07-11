import "./Banner.css";
import imgDouglas from "../img/WhatsApp_Image_2024-07-11_at_16.16.01-removebg-preview.png";

const Banner = () => {
  return (
    <>
      <div className="container-banner">
        <img src={imgDouglas} alt="" />
        <div className="nome">Douglas Gonçalo</div>
        <div className="funcao">Desenvolvedor Front End</div>
      </div>
      ;
    </>
  );
};

export default Banner;
