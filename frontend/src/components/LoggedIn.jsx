import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();

  return (
    <>
      <h1>Welcome {user.name}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}
