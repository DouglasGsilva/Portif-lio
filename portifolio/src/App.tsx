import "./App.css";
import imagemBaner from "./img/foto-banner.jpg";
import { Navbar } from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
function App() {
  return (
    <>
      <Navbar />
      <img id="imgBanner" src={imagemBaner} alt="imagembanner" />
      <Banner />
      <About />
    </>
  );
}

export default App;
