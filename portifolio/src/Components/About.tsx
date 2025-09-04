

const About = () => {
  return (
    <div className="w-300px h-50 bg-[#38474e] mt-20">
      <h1 className="text-[28px] text-center ">Sobre mim</h1>
    <div className="flex m-auto justify-center itens-center">
      <div className="bg-black w-5 h-[3px] mr-2 "></div>
      <div className="bg-black w-15 h-[3px] "></div>
    </div>
      <div className="text-center text-[18px] mt-[20px]">
        Sou um desenvolvedor Full Stack e gosto muito de programação, estou a
        procura de me especializar ainda mais na área e mostrar minhas
        habilidades utilizando as tecnologias <b>React, Typescript e Node js</b>
      </div>

      <a
        href="https://drive.google.com/file/d/1NGxPllCM_TiLnH6-QVMSWTWIO0-DcyQy/view?usp=drive_link"
        target="_blank"
        className=""
      >
        <b>Meu CV</b>
      </a>
    </div>
  );
};

export default About;
