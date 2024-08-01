import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Gallery2 from "./Pages/Gallery2";


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/gallery2" element={<Gallery2/>}/>
     </Routes>
     </Router>

  )
}
export default App;