import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import styles
import './style/index.css';

//import Home page 
import Home from "./template/home/index";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
           
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
