import { PersonTypes } from "./Person.types";

export const Person = (props: PersonTypes) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
