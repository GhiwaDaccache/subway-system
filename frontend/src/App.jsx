import "./styles/utilities.css";
import "./styles/colors.css";

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  useEffect(() => {}, []);

  return(
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
