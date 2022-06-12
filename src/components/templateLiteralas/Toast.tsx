type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastType = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastType) => {
  return <div>Toast Notification Position - {position}</div>;
};
