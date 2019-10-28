import React from "react";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
};

export default App;
