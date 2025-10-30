import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5263/api/counter";

function App() {
  const [globalCount, setGlobalCount] = useState(0);
  const [userCount, setUserCount] = useState(
    parseInt(localStorage.getItem("userCount")) || 0
  );

  useEffect(() => {
    fetchGlobalCount();
  }, []);

  const fetchGlobalCount = async () => {
    const res = await axios.get(`${API_URL}/global`);
    setGlobalCount(res.data);
  };

  const incrementGlobal = async () => {
    const res = await axios.post(`${API_URL}/global/increment`);
    setGlobalCount(res.data);
  };

  const incrementUser = () => {
    const newCount = userCount + 1;
    setUserCount(newCount);
    localStorage.setItem("userCount", newCount);
  };

  return (
    <div style={{ display: "flex", gap: "30px", padding: "50px" }}>
      <div
        onClick={incrementGlobal}
        style={{
          background: "#007bff",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          cursor: "pointer",
          width: "200px",
          textAlign: "center"
        }}
      >
        <h3>Global Counter</h3>
        <p>{globalCount}</p>
      </div>

      <div
        onClick={incrementUser}
        style={{
          background: "#28a745",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          cursor: "pointer",
          width: "200px",
          textAlign: "center"
        }}
      >
        <h3>User Counter</h3>
        <p>{userCount}</p>
      </div>
    </div>
  );
}

export default App;
