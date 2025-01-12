import { useState } from "react";
import { pass } from "three/webgpu";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  const handleLogin = () => {
    const correctUsername = "Kacper";
    const correctPassword = "Alusia2003";

    if (username === correctUsername && password === correctPassword) {
      setLoggedin(true);
    } else {
      alert("Unknown user");
    }
  };
};
