import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Form from "./Form";

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();
  return (
    <div>
      <h1>Welcome to Tutor Master, {user.given_name}</h1>
      <br />
      <Form />
      <button onClick={logout}>Logout</button>
    </div>
  );
}