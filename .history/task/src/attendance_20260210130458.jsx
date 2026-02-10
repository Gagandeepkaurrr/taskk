import React from "react";
import "./attendance.css"

function Attendance() {
  return (
    <div className="app">
      <h1>Attendance Record</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="date" required/>
      </form>
    </div>
  );
}

export default Attendance;