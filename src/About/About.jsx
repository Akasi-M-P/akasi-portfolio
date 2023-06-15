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
          As a Software Engineer, I possess a solid educational foundation in
          Information Technology Management. I obtained a Bachelor of Science
          degree in Information Technology Management from the University of
          Professional Studies, Accra-Ghana along with a Diploma in Information
          Technology Management from the same institution. Complementing my
          formal education, I have enriched my skills through various online
          courses and bootcamps, such as completing The Complete Web Development
          Bootcamp led by Dr. Angela Yu on Udemy and the Software Engineering
          and Frontend Engineering program offered by Codetrain Africa and Azubi
          Africa respectfully.
        </p>
      </main>
    </>
  );
};
export default About;
