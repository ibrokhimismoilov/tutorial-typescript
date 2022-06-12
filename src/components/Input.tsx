import React from "react";

type InputTypes = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ handleChange }: InputTypes) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event);
  // };

  return <input type="text" onChange={handleChange} />;
};
