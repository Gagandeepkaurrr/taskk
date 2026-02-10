import { useState, useEffect } from 'react'
import './App.css'
import Enter from "./enter"
import Attendance from "./attendance";
import Background from "./Layout grid.png"

function App() {
  const [show, setShow] = useState(false);
    useEffect(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000); }, []);

  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${Background})`, backgroundRepeat:'repeat' }}>
        {show &&(<Enter />)}
        <Attendance />
      </div>
    </>
  )
}

export default App
