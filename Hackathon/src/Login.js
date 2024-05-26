// Login.js
import React from "react";

const Login = () => {
  return (
    <div className="login">
      <form>
        <input type="text" placeholder="Enter username" style={styles.input} />
        <input type="password" placeholder="Enter password" style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  input: {
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%"
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Login;
