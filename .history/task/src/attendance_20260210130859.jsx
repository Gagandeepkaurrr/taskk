import React from "react";
import "./attendance.css"

function Attendance() {
  return (
    <div className="app">
      <div><h1>Attendance Record</h1></div>
      <hr />
      <form>
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