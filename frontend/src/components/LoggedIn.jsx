import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();
  
  // we can fetch user given name, family name, email and id token 
  return (
    <>
      <h1>Welcome {user.given_name} {user.family_name} {user.email}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}
