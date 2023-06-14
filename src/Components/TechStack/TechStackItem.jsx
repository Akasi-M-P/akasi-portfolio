import "/src/css/TechStack.css";
import  StackData from "./StackData.jsx"

const TechStackItem = () => {
  const {name, img} = StackData;
  return (
    <main>
      <div className="stack-item">
        <div className="stack-img">
          <img src={img} alt={name}/>
        </div>
        <div className="stack-name">
          {name}
        </div>
      </div>
    </main>
  )
}
export default TechStackItem