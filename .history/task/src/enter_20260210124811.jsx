import logo from "./image.png"
import "./enter.css"
import React, { useState, useEffect } from "react";

function Enter() {
  useState[show, setShow] = useState(false);
  
  setShow(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000); }, []);

  return (
    <div className="enter">
        {show && (<img src={logo} alt="enter" width={250} height={250} />)}
    </div>
  );
}

export default Enter;
