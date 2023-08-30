import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "/src/css/About.css";
// ..
AOS.init();

const About = () => {
  return (
    <>
      <main data-aos="fade-up" className="about-container">
        <h1>About Me</h1>
        <p>
          Software Engineer with over 1 year of experience utilizing JavaScript,
          React.JS, Node.JS, Next.JS, Express.JS, MySQL, MongoDB and REST API in
          crafting responsive interfaces and developing server-side applications
          and databases. Developed over 15 projects and can contribute to
          Project Management, IT sourcing and Procurement and the Software
          Development Lifecycle.
        </p>
      </main>
    </>
  );
};
export default About;
