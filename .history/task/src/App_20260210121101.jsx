import { useState } from 'react'
import './App.css'
import Enter from "./enter"
import Attendance from "./attendance";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Enter />
      <Attendance />
    </>
  )
}

export default App
