import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Development from "./pages/Development";

function App() {
  return (
    <BrowserRouter>
   
      <Menu />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;