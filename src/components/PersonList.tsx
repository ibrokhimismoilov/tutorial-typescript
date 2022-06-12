import { Name } from "./Person.types";

type PersonListTypes = {
  names: Name[];
};

export const PersonList = (props: PersonListTypes) => {
  return (
    <div>
      <ul>
        {props.names.map((item) => {
          return (
            <li key={item.first}>
              {item.first} - {item.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
