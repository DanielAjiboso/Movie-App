import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";

import "./App2.css";

export default function App2() {
  return (
    <div className="App2">
      <Sidebar />
      <Mainbar />
    </div>
  );
}
