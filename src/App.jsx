import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies"
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./pages/MovieInfo/Info";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Movies" element={<Movies />}/>
          <Route path="/info/:id" element={<Info />}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
