import { useState } from "react";

type UserTypes = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<UserTypes>({} as UserTypes);

  const handleLogin = () => {
    setUser({
      name: "Ibrokhim",
      email: "me@ibrokhim.uz",
    });
  };

  const handleLogout = () => {
    setUser({} as UserTypes);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>

      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
