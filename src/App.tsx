import "./App.css";
import { Button } from "./components/Button";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Ibrokhim",
    last: "Ismoilov",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Pricess",
      last: "Diana",
    },
  ];

  const showAlert = () => {
    window.alert("Alert");
  };

  return (
    <div className="App">
      <Greet name="Ibrokhim" />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="Success" />
      <Oscar>
        <Heading>Placeholder childrens</Heading>
      </Oscar>
      <Button handleChange={(e) => console.log("hello world", e)}>Alert</Button>
    </div>
  );
}

export default App;
