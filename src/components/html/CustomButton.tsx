type CustomButton = {
  variant: "primary" | "secondary";
  children: "string";
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children, ...rest }: CustomButton) => {
  return (
    <button className={`btn-${variant}`} {...rest}>
      {children}
    </button>
  );
};
