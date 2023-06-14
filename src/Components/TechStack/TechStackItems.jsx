import {data} from "./StackData"
import "/src/css/TechStack.css"


const TechStackItems = () => {
  return (
    <>
      <main>
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
}
export default TechStackItems