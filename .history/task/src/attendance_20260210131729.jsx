import React from "react";
import "./attendance.css"

function Attendance() {
  return (
    <div className="app">
      <h1>Attendance Record</h1>
      <hr />
      <form style={{maxWidth: 400}}>
        <input type="text" placeholder="Name" required />
        <input type="date" required/>
        <select required>
            <option value="">Select Attendance</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      </div>
  );
}

export default Attendance;