// DeptSub.js
import React from "react";

const DeptSub = () => {
  return (
    <div className="deptSub">
      <form>
        <input type="text" placeholder="Enter school" style={styles.input} />
        <input type="text" placeholder="Enter subject" style={styles.input} />
        <button type="submit" style={styles.button}>Enter</button>
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

export default DeptSub;
