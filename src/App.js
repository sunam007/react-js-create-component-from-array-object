import logo from "./logo.svg";
import "./App.css";

function App() {
  const couples = [
    { name: "Jui", hubby: "Sunam" },
    { name: "Purna", hubby: "Rony" },
    { name: "Afia", hubby: "Cartoon" },
    { name: "Sara", hubby: "Hasib" },
  ];
  return (
    <div className="App">
      {couples.map((couple) => (
        <CoupleOfBU name={couple.name} hubby={couple.hubby}></CoupleOfBU>
      ))}
    </div>
  );
}

function CoupleOfBU(props) {
  console.log(props);
  const person = {
    border: "1px solid lightcoral",
    borderRadius: " 10px",
    backgroundColor: "lightblue",
    margin: "10px",
    padding: "10px",
    color: "lightcoral",
  };
  return (
    <div style={person}>
      <h2>Name: {props.name}</h2>
      <h2>Husband: {props.hubby}</h2>
    </div>
  );
}

export default App;
