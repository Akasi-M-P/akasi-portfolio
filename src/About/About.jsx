import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <>
      <main data-aos="fade-up">
        <h1>About</h1>
        <p>
          lorem What are values in JavaScript? JavaScript values() | How
          JavaScript values() Method Works? JavaScript values are the values
          that comprise values like Booleans, Strings, arrays, numbers, etc. Its
          behavior is the same as other programming languages as values are
          possessing some definite properties which is being used as per the
          requirement and run time environment while executing the JavaScript.
        </p>
      </main>
    </>
  );
};
export default About;
