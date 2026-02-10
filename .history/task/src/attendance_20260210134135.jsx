import React from "react";
import { useState } from "react";
import "./attendance.css"

function Attendance() {

  const [records, setRecords] = useState([]); 
  const [name, setName] = useState("");       
  const [date, setDate] = useState("");  
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { name, date, status };

    setRecords([...records, newRecord]);
    setName("");
    setDate("");
    setStatus("");
  }

  return (
    <div className="app">
      <h1>Attendance Record</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        <select onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Attendance</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
        </select>
        <button type="submit" >Submit</button>
      </form>

      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Attendance</th>
            </tr>
        </thead>
        <tbody>
            {records.map((record, index) => (
                <tr key={index}>
                    <td>{record.name}</td>
                    <td>{record.date}</td>
                    <td>{record.status}</td>
                </tr>
            ))}
        </tbody>
      </table>
      </div>
  );
}

export default Attendance;