import "./App.css";
import CompoundComponents from "./patterns/CompoundComponents/CompoundComponents";
import RenderProps from "./patterns/RenderProps/RenderProps";
import HOC from "./patterns/HOC/HOC";

function App() {
   return (
      <div className="App" style={{ width: 800, margin: "10px auto" }}>
         <CompoundComponents />
         <RenderProps />
         <HOC />
      </div>
   );
}

export default App;
