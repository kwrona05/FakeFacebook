import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  const handleLogin = () => {
    const correctUsername = "Kacper";
    const correctPassword = "Alusia2003";

    if (username === correctUsername && password === correctPassword) {
      setLoggedin(true);
      //navigate to home
    } else {
      alert("Unknown user");
    }
  };

  return (
    <div className="login-container">
      {loggedin ? (
        <h1>Hello, {username}!</h1>
      ) : (
        <div className="loggin-form">
          <h2>CrowBook</h2>
          <input
            className="username-input"
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="password-input"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit-loggin" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};
export default Login;
