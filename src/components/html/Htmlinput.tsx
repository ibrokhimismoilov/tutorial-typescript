import React from "react";

type InputProps = React.ComponentProps<"input">;

export const HtmlInput = (props: InputProps) => {
  return <input {...props} />;
};
