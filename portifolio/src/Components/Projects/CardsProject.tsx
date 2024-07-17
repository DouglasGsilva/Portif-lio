import React, { useRef } from "react";

interface CardsProjectProps {
  video: string;
  title: string;
  alt: string;
  description: string;
  icon?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  hrefDeploy: string;
  hrefGithub: string;
}

const CardsProject: React.FC<CardsProjectProps> = ({
  video,
  title,
  description,
  icon,
  icon2,
  icon3,
  icon4,
  icon5,
  alt,
  hrefDeploy,
  hrefGithub,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <div className="project-card">
        <div className="content">
          <div className="front">
            <div className="front-content">
              <video
                className="videoprjt1"
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <source src={video} />
              </video>
              <h3 id="titulo">{title}</h3>
              <p id="description">{description}</p>
              <div className="icons-project">
                <img id="icon-lg" src={icon} alt={alt} />
                <img id="icon-lg" src={icon2} alt={alt} />
                <img src={icon3} alt={alt} />
              </div>
              <div className="icons-backend-project">
                <img id="icon-lg" src={icon4} alt={alt} />
                <img id="icon-lg" src={icon5} alt={alt} />
              </div>
              <div className="container-btns">
                <a href={hrefDeploy} className="botao-style">
                  <h3>Deploy</h3>
                </a>
                <a href={hrefGithub} className="botao-style" target="_blank">
                  <h3>Github</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsProject;
