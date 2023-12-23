import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Landing = () => {
  const { login, signup} = useKindeAuth();
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#f4f4f4',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My App</h1>
      <button style={{ ...buttonStyle, background: '#28a745', color: '#fff' }} onClick={login}>
        Login
      </button>
      <button style={{ ...buttonStyle, background: '#007bff', color: '#fff' }} onClick={signup}>
        Signup
      </button>
    </div>
  );
};

export default Landing;