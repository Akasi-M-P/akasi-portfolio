import { data } from "./MajorProjectsData";
import "/src/css/MajorProjects.css";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const MajorProjects = () => {
  return (
    <>
      <main
        className="project-container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="major_projects-header">
          <h3>Major Projects</h3>
        </div>
        <div className="project-item-container">
          {data.map((project) => {
            return (
              <div key={project.id} className="project-item">
                <div className="project-img-container">
                  <img src={project.img} alt={project.name} />
                </div>
                <div className="project-details">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="github"
                  >
                    <h6>Github</h6>
                    <img src="/images/contact-links/github.png" alt="github" />
                  </a>
                  <button>
                    <a
                      href={project.preview}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <h5>Preview</h5>
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
export default MajorProjects;
