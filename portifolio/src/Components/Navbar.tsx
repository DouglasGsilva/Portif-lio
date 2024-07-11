import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <a href="https://github.com/DouglasGsilva" target="_blank">
        <button className="btn-social">
          <h3>GITHUB</h3>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/douglas-silva-894065233/"
        target="_blank"
      >
        <button className="btn-social">
          <h3>LINKEDIN</h3>
        </button>
      </a>
    </div>
  );
};
