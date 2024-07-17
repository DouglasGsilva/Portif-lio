import "./App.css";
import imagemBaner from "./img/foto-banner.jpg";
import { Navbar } from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  const botao = document.querySelector(".btn-fixed");

  window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
      botao?.classList.remove("visible");
    } else {
      botao?.classList.add("visible");
    }
  });

  return (
    <>
      <Navbar />
      <img id="imgBanner" src={imagemBaner} alt="imagembanner" />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <a className="btn-fixed" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width={30}
          height={30}
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </a>
    </>
  );
}

export default App;
