import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { ClassCounter } from "./components/class/ClassCounter";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User2 } from "./components/context/User2";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generic/List";
import { ListObj } from "./components/generic/ListObj";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/CustomButton";
import { CustomComponent } from "./components/html/CustomComponent";
import { HtmlInput } from "./components/html/Htmlinput";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Text } from "./components/poliymorphic/Text";
import { DomRef } from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Counter } from "./components/state/Counter";
import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { Toast } from "./components/templateLiteralas/Toast";

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
  return (
    <ThemeContextProvider>
      <div className="App">
        <Greet name="Ibrokhim" />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="Success" />
        <Oscar>
          <Heading>Placeholder childrens</Heading>
        </Oscar>
        <Button handleChange={(e) => console.log("hello world", e)}>
          Alert
        </Button>
        <Input handleChange={(e) => console.log(e.target.value)} />
        <Container styles={{ backgroundColor: "red" }}>Container</Container>
        <br />
        <br />
        <User />
        <br />
        <br />
        <Counter />
        <br /> <br />
        <Box />
        <br />
        <br />
        <UserContextProvider>
          <User2 />
        </UserContextProvider>
        <br />
        <br />
        <DomRef />
        <MutableRef />
        <br />
        <br />
        <ClassCounter message="Counter" />
        <br />
        <br />
        <Private isLoggedIn={true} component={Profile} />
        <br />
        <br />
        <List
          items={["Batman", "Superman", "Wounder Woman"]}
          onClick={(item) => console.log(item)}
        />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
        <br />
        <br />
        <ListObj
          items={[
            {
              id: 1,
              first: "Ken",
              last: "Den",
            },
            {
              id: 2,
              first: "Bruce",
              last: "Djor",
            },
            {
              id: 3,
              first: "Wanna",
              last: "Kala",
            },
          ]}
          onClick={(item) => console.log(item)}
        />
        <br />
        <br />
        <RandomNumber value={10} isPositive />
        <br />
        <br />
        <Toast position={`center`} />
        <br />
        <br />
        <CustomButton variant="primary" onClick={() => console.log("Hello")}>
          Custom button
        </CustomButton>
        <br />
        <br />
        <HtmlInput onChange={(e) => console.log(e.target.value)} />
        <br />
        <br />
        <CustomComponent name={"Ibrokhim"} />
        <br />
        <br />
        <Text as="h1" size="lg">
          Heading
        </Text>
        <Text as="p" size="md">
          Paragraph
        </Text>
        <Text as="label" htmlFor="someId" size="sm" color="secondary">
          Label
        </Text>
        <input type="text" id="someId" />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
