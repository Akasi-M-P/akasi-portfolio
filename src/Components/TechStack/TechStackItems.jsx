import {data} from "./StackData"
import "/src/css/TechStack.css"
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const TechStackItems = () => {
  return (
    <>
      <main data-aos="fade-up">
        <div className="stack-header">
          <h3>Tech Stack</h3>
        </div>
        <div className="stack-container">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="stack-item">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
export default TechStackItems