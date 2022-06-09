import React from "react";

type GreetTypes = {
  name: string;
  age?: number;
};

const Greet = (props: GreetTypes) => {
  const { age = 0 } = props;
  return (
    <div>
      <h2>
        Welcome {props.name} - {age}
      </h2>
    </div>
  );
};

export default Greet;
