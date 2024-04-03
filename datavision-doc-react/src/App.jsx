import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import styles
import './style/index.css';

//import Home page 
import Home from "./template/home/index";

//import doc page
import Doc from "./template/doc/index";

/*import doc pages */
import GettingStartedPage from './template/doc/getting-started';
import OperationsPage from './template/doc/operations';
import BarPage from './template/doc/bar';
import LinePage from './template/doc/line';
import PiePage from './template/doc/pie';
import ScatterPage from './template/doc/scatter';
import MixedPage from './template/doc/mixed';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/docs" element={<Doc />}>
            <Route index element={<GettingStartedPage />} />
            <Route path="operations" element={<OperationsPage />} />
            <Route path="bar" element={<BarPage />} />
            <Route path="line" element={<LinePage />} /> 
            <Route path="pie" element={<PiePage />} /> 
            <Route path="scatter" element={<ScatterPage />} /> 
            <Route path="mixed" element={<MixedPage />} /> 

          </Route>

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
