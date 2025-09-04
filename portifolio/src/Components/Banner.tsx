import imgDouglas from "../img/foto-final-portifolio.png";

const Banner = () => {
  return (
    <>
      <header className="relative">
        <div className=" justify-center m-0 p-0 flex">
          <div className="content-center text-center m-0 p-0  sm:max-w-[2000px] ">
            <h1 className="text-[26px] max-w-full">Douglas Gonçalo</h1>
            <h2 className="text-[19px] max-w-full ">Desenvolvedor Full Stack</h2>
          </div>
          <div >
            <img className="w-65 h-80 " src={imgDouglas} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
