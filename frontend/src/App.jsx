import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "./components/LoggedIn";
import Landing from "./components/Landing";

export default function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) return <>Loading...</>;

  return isAuthenticated ? <LoggedIn /> : <Landing />;
  
}
