import React from "react";
import Landing from "./components/Landing";
// import Navbar from "./components/Navbar";

//Importing react-router-dom to navigate from one page to another
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Projes from "./components/Projecs";
import Projecs from "./components/Projecs";




const App = () => {
  return(
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
          <Route path="About" element={<About/>}/>
          <Route path="Project" element={<Projecs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;