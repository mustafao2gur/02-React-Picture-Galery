import Homepage from "./components/Homepage";
import Picture from "./components/Picture";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Homepage />
      <div className="container">
      {data.map(({ photographer, src }) => (
        <Picture photographer={photographer} src={src} />
      ))}
     </div>
    </div>
  );
}

export default App;