import "./Banner.css";
import imgDouglas from "../img/foto-final-portifolio.png";
const Banner = () => {
  return (
    <>
      <header className='container-banner'>
        <div className='display-content'>
          <div className='nome'>Douglas Gonçalo</div>
          <div className='funcao'>Desenvolvedor Front End</div>
        </div>
        <img id='imgDG' src={imgDouglas} alt='' />
      </header>
    </>
  );
};

export default Banner;
