type StatusTypes = {
  status: "Loading" | "Success" | "Error";
};

export const Status = (props: StatusTypes) => {
  let message;
  if (props.status === "Loading") {
    message = "Loading...";
  } else if (props.status === "Success") {
    message = "Data fetched successfully";
  } else {
    message = "Error fetched data";
  }
  return (
    <div>
      <h2> Status - {message}</h2>
    </div>
  );
};
