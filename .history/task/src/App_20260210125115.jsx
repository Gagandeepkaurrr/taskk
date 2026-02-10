import { useState, useEffect } from 'react'
import './App.css'
import Enter from "./enter"
import Attendance from "./attendance";

function App() {
  const [show, setShow] = useState(false);
    useEffect(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000); }, []);

  return (
    <>
      <Enter />
      <Attendance />
    </>
  )
}

export default App
