import logo from "./image.png"
import "./enter.css"
import React, { useState, useEffect } from "react";

function Enter() {
  
  return (
    <div className="enter">
        <img src={logo} alt="enter" width={250} height={250} />
    </div>
  );
}

export default Enter;
