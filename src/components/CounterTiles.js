import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from "../utils/userId";

const API_BASE = "http://localhost:5263/api/counter";
const userId = getUserId();

export default function CounterTiles() {
  const [globalCount, setGlobalCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios.get(`${API_BASE}/global`).then(res => setGlobalCount(res.data));
    axios.get(`${API_BASE}/user/${userId}`).then(res => setUserCount(res.data));
  }, []);

  const incrementGlobal = () => {
    axios.post(`${API_BASE}/global/increment`).then(res => setGlobalCount(res.data));
  };

  const incrementUser = () => {
    axios.post(`${API_BASE}/user/${userId}/increment`).then(res => setUserCount(res.data));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "100px" }}>
      <div style={{
        border: "2px solid #888",
        borderRadius: "15px",
        padding: "30px",
        textAlign: "center",
        width: "200px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2>Global Counter</h2>
        <h1>{globalCount}</h1>
        <button onClick={incrementGlobal} style={{
          marginTop: "10px",
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>Increment</button>
      </div>

      <div style={{
        border: "2px solid #888",
        borderRadius: "15px",
        padding: "30px",
        textAlign: "center",
        width: "200px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2>User Counter</h2>
        <h1>{userCount}</h1>
        <button onClick={incrementUser} style={{
          marginTop: "10px",
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>Increment</button>
      </div>
    </div>
  );
}
