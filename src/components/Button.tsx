import React from "react";

type ButtonTypes = {
  handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

export const Button = (props: ButtonTypes) => {
  return <button onClick={props.handleChange}>{props.children}</button>;
};
