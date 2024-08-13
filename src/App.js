import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Gallery2 from "./Pages/Gallery2";
import Vision from "./Pages/Vision";
import NotFound from "./Components/NotFound";


function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
      <Routes>
       <Route path="/" element={<Home/>}/>
        {/* <Route path="/cloprosys" element={<Home/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/gallery2" element={<Gallery2/>}/>
        <Route path="/vision" element={<Vision/>}/>
        <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
     </Routes>
     </Router>

  )
}
export default App;