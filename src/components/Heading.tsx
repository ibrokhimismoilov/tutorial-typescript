type HeadingTypes = {
  children: string;
};

export const Heading = (props: HeadingTypes) => {
  return <h2>{props.children}</h2>;
};
