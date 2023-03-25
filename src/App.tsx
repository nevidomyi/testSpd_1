import React from "react";
import styled from "styled-components";
import Home from "./components/pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
