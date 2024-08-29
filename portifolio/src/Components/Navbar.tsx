import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className='nav'>
      <a
        className='btn-social'
        href='https://github.com/DouglasGsilva'
        target='_blank'
      >
        <h3>Github</h3>
      </a>
      <a
        className='btn-social'
        href='https://www.linkedin.com/in/douglas-silva-894065233/'
        target='_blank'
      >
        <h3>Linkedin</h3>
      </a>
    </div>
  );
};
