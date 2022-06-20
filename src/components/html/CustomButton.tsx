type CustomButton = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
} & React.ComponentProps<"button">;

export const CustomButton = ({ variant, children, ...rest }: CustomButton) => {
  return (
    <button className={`btn-${variant}`} {...rest}>
      {children}
    </button>
  );
};
