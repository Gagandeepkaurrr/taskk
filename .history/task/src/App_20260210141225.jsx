import { useState, useEffect } from 'react';
import './App.css';
import Enter from "./enter";
import Attendance from "./attendance";
import Background from "./Layout grid.png";

function App() {
  const [showEnter, setShowEnter] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnter(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'repeat' }}
    >
      {showEnter ? <Enter /> : <Attendance />}
    </div>
  );
}

export default App;
