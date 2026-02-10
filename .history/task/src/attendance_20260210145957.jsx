import React from "react";
import { useState } from "react";
import "./attendance.css"

function Attendance() {

  const [records, setRecords] = useState(() => {
  const saved = localStorage.getItem("attendanceRecords");
  return saved ? JSON.parse(saved) : [];
});

  const [filterName, setFilterName] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [name, setName] = useState("");       
  const [date, setDate] = useState("");  
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { name, date, status };
    const updatedRecords = [...records, newRecord];

  setRecords(updatedRecords);
  localStorage.setItem("attendanceRecords", JSON.stringify(updatedRecords));

    setRecords([...records, newRecord]);
    setName("");
    setDate("");
    setStatus("");
  }

  const filteredRecords = records.filter((record) => {
  return (
    (record.name.toLowerCase().includes(filterName.toLowerCase())) &&
    (filterDate === "" || record.date === filterDate) &&
    (filterStatus === "" || record.status === filterStatus)
  );
});


  return (
    <div className="app">
      <h1>Attendance Record</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input className="a" type="text" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)} required />
        <input className="a" type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        <select onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Attendance</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
        </select>
        <button type="submit" >Submit</button>
      </form>

      <span className="filters" >
        <h2 style={{fontSize:20}}>Filter Search</h2>
        <input className="b" type="date" value={filterDate}  onChange={(e) => setFilterDate(e.target.value)} />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} >
            <option value="">All</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
        </select>
      </span>

      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Attendance</th>
            </tr>
        </thead>
        <tbody>
            {filteredRecords.map((record, index) => (
      <tr key={index}>
      <td>{record.name}</td>
      <td>{record.date}</td>
      <td>{record.status}</td>
      <td>  <button
  onClick={() => {
    const input = prompt("Type CONFIRM to delete this record");
    if (input === "CONFIRM") {
      setRecords(records.filter(r => r !== record));
      localStorage.setItem(
        "attendanceRecords",
        JSON.stringify(records.filter(r => r !== record))
      );
    }
  }}
>
  Delete
</button>
 </td>
    </tr>
  ))}
        </tbody>
      </table>
      </div>
  );
}

export default Attendance;