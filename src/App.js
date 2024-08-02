import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Gallery2 from "./Pages/Gallery2";


function App() {
  return (
      <Router>
      <Routes>
<<<<<<< HEAD
       <Route path="/" element={<Home/>}/>
=======
        <Route path="/" element={<Home/>}/>
>>>>>>> 7a246aae0f684ae4ca67daa6a31c6e6551da5847
        <Route path="/cloprosys" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/gallery2" element={<Gallery2/>}/>
     </Routes>
     </Router>

  )
}
export default App;