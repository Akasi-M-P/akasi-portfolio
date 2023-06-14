/* eslint-disable react/no-unescaped-entities */
// import {motion} from "framer-motion"
const Hero = () => {
  return (
    <>
      <div className="main-hero ">
        <div className="left-hero box-left">
          <h2>
            Hello there! <br /> I'm Peter Akasi Mba.
          </h2>
          <p>
            A software engineer with deep expertise in the MERN (MongoDB,
            Express.js, React.js, Node.js) stack, I possess the skills to create
            dynamic and robust web applications. I combine my love for clean
            code with an eye for captivating design to craft immersive digital
            experiences.
          </p>
          <div className="mern-container">
            <img
              className="mern-logo"
              src="./src/images/80MERN-logo.png"
              alt="mern-logo"
            />
          </div>
        </div>
        <div className="right-hero box-right">
          <h3 className="hire-me">Hire me as your...</h3>
          <div className="role-list">
            <ul>
              <li>
                <span>🛠️</span>Frontend Developer
              </li>
              <li>
                <span>🛠️</span>Backend Developer
              </li>
              <li>
                <span>🛠️</span>System Analyst
              </li>
              <li>
                <span>🛠️</span>Database Administrator
              </li>
              <li>
                <span>🛠️</span>Information Technology Procurement Manager
              </li>
              <li>
                <span>🛠️</span>Database Administrator
              </li>
            </ul>
          </div>
          <div className="contact-list">
            <ul>
              <li>
                <a
                  href="https://github.com/Akasi-M-P"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="/src/assets/contact-links/github.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/peter-m-akasi-394820145/"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="/src/assets/contact-links/linkedin.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Peter_Akasi_Mba"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="/src/assets/contact-links/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B233241899029&text&app_absent=0"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="/src/assets/contact-links/whatsapp.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="my-resume">
            <a
              href="/src/assets/contact-links/Peter_FullStack_Dev.pdf"
              target={"_blank"}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero
