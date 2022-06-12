import React from "react";

type ContainerTypes = {
  children: React.ReactNode;
  styles: React.CSSProperties;
};

export const Container = (props: ContainerTypes) => {
  return <div style={props.styles}>{props.children}</div>;
};
