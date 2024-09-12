/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function MyDatePicker() {
  const [selected, setSelected] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    setShowMessage(false);
    setSelected(null);
  };

  const handleDaySelect = (day) => {
    setSelected(day);
    setShowMessage(true); 
  };

  return (
    <div>
      <DayPicker
        startMonth={new Date(2024, 7)} // August 2024
        endMonth={new Date(2024, 8)} // September 2024
        mode="single"
        selected={selected}
        onSelect={handleDaySelect}
        disabled={[
          { from: new Date(2024, 7, 1), to: new Date(2024, 7, 15) }, // Disable August 1-15
          { from: new Date(2024, 8, 14), to: new Date(2024, 8, 30) }, // Disable September 14-30
        ]}
        footer={
          selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
        }
      />

      {/* Conditionally render the div when a day is selected */}
      {showMessage && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            position: "relative",
            maxWidth: "200px",
          }}
        >
          You selected a day!
          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "5px",
              right: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#888",
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

/* 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

export default MyDatePicker
